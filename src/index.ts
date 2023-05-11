
/* IMPORT */

import {MODIFIER_BITMASK, TRIGGER_BITMASK} from './constants';
import {PLUSES_RE, WHITESPACE_RE} from './constants';
import {CHAR2ID, CODE2ID, KEY2ID, MOUSE2ID} from './maps';
import {attempt, castArray, enumerate, first, isString, nope, or} from './utils';
import type {Disposer, Handler, ChordNode, HandlerNode, Options} from './types';

/* HELPERS */ //TODO: Maybe move these elsewhere

const id2modifier = ( id: number ): number => {
  return ( id & MODIFIER_BITMASK );
};

const id2trigger = ( id: number ): number => {
  return ( id & TRIGGER_BITMASK );
};

const shortcut2ids = ( shortcut: string ): number[][] => {
  const chords = shortcut.trim ().split ( WHITESPACE_RE );
  const parts = chords.map ( chord2ids );
  const ids = enumerate ( parts );
  return ids;
};

const chord2ids = ( chord: string ): number[] => {
  const keys = chord.replace ( PLUSES_RE, '+Plus' ).toLowerCase ().split ( '+' );
  const parts = keys.map<number | number[]> ( key => KEY2ID[key] || CHAR2ID[key] || 0 );
  const ids = enumerate ( parts ).map ( or );
  return ids;
};

const event2id = ( event: Event ): number => {
  if ( event instanceof KeyboardEvent ) {
    return CODE2ID[event.code] || CHAR2ID[event.key] || 0;
  } else if ( event instanceof MouseEvent ) {
    return MOUSE2ID[event.button] || 0;
  } else {
    return 0;
  }
};

/* MAIN */

//TODO: Support character-based shortcuts (like Shift+#), by forking the current chords
//TODO: Support character-based shortcut triggering
//TODO: Alternatively, though less correct, rewrite some character-based shortcuts when registering them
//TODO: Support konami codes, by having a ~never-resetting chords array for them
//TODO: Trim chords a tsome point
//TODO: Support recording shortcuts
//TODO: Support deleting shortcuts with a filter, without the disposer function

class ShoSho {

  /* VARIABLES */

  private active: boolean;
  private chords: number[];
  private options: Options;

  private tree: ChordNode = {
    children: {},
    handlers: {
      handler: nope
    }
  };

  /* CONSTRUCTOR */

  constructor ( options: Options = {} ) {

    this.active = false;
    this.chords = [0];
    this.options = options;

  }

  /* PRIVATE API */

  private onDown = ( event: Event ): void => {

    const index = this.chords.length - 1;
    const id = event2id ( event );

    this.chords[index] |= id;

    const handled = attempt ( () => this.trigger ( this.chords ), false );
    const triggered = !!id2trigger ( this.chords[index] );

    if ( handled ) {

      this.chords = triggered ? [this.chords[index] &~ id] : [0];

      event.preventDefault ();
      event.stopImmediatePropagation ();

    } else if ( triggered ) {

      this.chords.push ( this.chords[index] &~ id );

    }

  };

  private onUp = ( event: Event ): void => {

    const index = this.chords.length - 1;

    this.chords[index] &=~ event2id ( event );

  };

  /* PUBLIC API */

  register = ( shortcut: string | string[], handler: Handler ): Disposer => {

    const chordseses = castArray ( shortcut ).map ( shortcut2ids );
    const nodes: HandlerNode[] = [];

    /* REGISTER */

    for ( const chordses of chordseses ) {

      for ( const chords of chordses ) {

        let node = this.tree;

        for ( const chord of chords ) {

          node = node.children[chord] ||= {
            children: {},
            handlers: {
              handler: nope
            }
          };

        }

        const handlers = node.handlers;

        node.handlers = handlers.next = {
          prev: handlers,
          handler
        };

        nodes.push ( node.handlers );

      }

    }

    /* UNREGISTER */

    return (): void => {

      for ( const node of nodes ) {

        const {prev, next} = node;

        if ( prev ) prev.next = next;
        if ( next ) next.prev = prev;

      }

    };

  };

  reset = (): void => {

    this.tree.children = {};

  };

  trigger = ( shortcut: string | number | number[], event?: KeyboardEvent | MouseEvent ) : boolean => {

    const chords = isString ( shortcut ) ? first ( shortcut2ids ( shortcut ) ) : castArray ( shortcut );

    if ( !chords ) return false;

    for ( let i = 0, l = chords.length; i < l; i++ ) { // Trying all possible sequences

      const slice = i ? chords.slice ( i ) : chords;

      let node: ChordNode | undefined = this.tree;

      for ( const chord of slice ) {

        node = node?.children[chord];

      }

      let handler = node?.handlers;

      while ( handler ) {

        if ( handler.handler ( event ) !== true ) {

          handler = handler.prev;

        } else {

          return true;

        }

      }

    }

    return false;

  };

  start = (): void => {

    if ( this.active ) return;

    this.active = true;

    const capture = this.options.capture ?? false;
    const root = this.options.target || document;

    root.addEventListener ( 'keydown', this.onDown, { capture } );
    root.addEventListener ( 'keyup', this.onUp, { capture } );
    root.addEventListener ( 'click', this.onDown, { capture } );
    root.addEventListener ( 'auxclick', this.onDown, { capture } );
    root.addEventListener ( 'contextmenu', this.onDown, { capture } );

  };

  stop = (): void => {

    if ( !this.active ) return;

    this.active = false;

    const capture = this.options.capture ?? false;
    const root = this.options.target || document;

    root.removeEventListener ( 'keydown', this.onDown, { capture } );
    root.removeEventListener ( 'keyup', this.onUp, { capture } );
    root.removeEventListener ( 'click', this.onDown, { capture } );
    root.removeEventListener ( 'auxclick', this.onDown, { capture } );
    root.removeEventListener ( 'contextmenu', this.onDown, { capture } );

  };

}

/* EXPORT */

export default ShoSho;
