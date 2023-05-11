
/* IMPORT */

import {MODIFIER_BITMASK, TRIGGER_BITMASK} from './constants';
import {PLUSES_RE, WHITESPACE_RE} from './constants';
import {CHAR2ID, CODE2ID, KEY2ID, MOUSE2ID} from './maps';
import {attempt, castArray, enumerate, escapeRe, first, isString, nope, or} from './utils';
import type {Disposer, Handler, ChordNode, HandlerNode, HandlerOptions, Options} from './types';

/* HELPERS */ //TODO: Maybe move these elsewhere

const normalize = (() => { //TODO: This isn't always correct, the list of chords should be forked instead
  const digits = { '!': '1', '@': '2', '#': '3', '$': '4', '%': '5', '^': '6', '&': '7', '*': '8', '(': '9', ')': '0' };
  const punctuation = { '_': '-', '{': '[', '}': ']', '|': '\\', ':': ';', '"': "'", '<': ',', '>': '.', '?': '/', '~': '`' };
  const replacements = { ...digits, ...punctuation };
  const re = new RegExp ( `[${Object.keys ( replacements ).map ( escapeRe ).join ( '' )}]`, 'g' );
  return ( shortcut: string ): string => {
    return shortcut.replace ( re, char => replacements[char] );
  };
})();

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

//TODO: Support character-based shortcuts (like Shift+#), by forking the current chords, i.e. properly
//TODO: Support character-based shortcut triggering
//TODO: Support recording shortcuts
//TODO: Support deleting shortcuts with a filter, without the disposer function

class ShoSho {

  /* VARIABLES */

  private active: boolean;
  private chords: number[];
  private chordsKonami: number[];
  private depth: number;
  private depthKonami: number;
  private options: Options;

  private tree: ChordNode = {
    children: {},
    handlers: {
      handler: nope
    }
  };

  private treeKonami: ChordNode = {
    children: {},
    handlers: {
      handler: nope
    }
  };

  /* CONSTRUCTOR */

  constructor ( options: Options = {} ) {

    this.active = false;
    this.chords = [0];
    this.chordsKonami = [0];
    this.depth = 0;
    this.depthKonami = 0;
    this.options = options;

  }

  /* PRIVATE API */

  private onDown = ( event: Event ): void => {

    const index = this.chords.length - 1;
    const indexKonami = this.chordsKonami.length - 1;
    const id = event2id ( event );

    this.chords[index] |= id;
    this.chordsKonami[indexKonami] |= id;

    const handled = attempt ( () => this.trigger ( this.chords ), false );
    const triggered = !!id2trigger ( this.chords[index] );

    if ( handled ) {

      this.chords = triggered ? [this.chords[index] &~ id] : [0];

      event.preventDefault ();
      event.stopImmediatePropagation ();

    } else if ( triggered ) {

      this.chords.push ( this.chords[index] &~ id );

    }

    if ( triggered ) {

      this.chordsKonami.push ( this.chordsKonami[indexKonami] &~ id );

    }

    if ( this.chords.length > this.depth ) {

      this.chords = this.chords.slice ( - this.depth );

    }

    if ( this.chordsKonami.length > this.depthKonami ) {

      this.chordsKonami = this.chordsKonami.slice ( - this.depthKonami );

    }

  };

  private onUp = ( event: Event ): void => {

    const index = this.chords.length - 1;
    const indexKonami = this.chordsKonami.length - 1;
    const id = event2id ( event );

    this.chords[index] &=~ id;
    this.chordsKonami[indexKonami] &=~ id;

  };

  /* PUBLIC API */

  register = ( shortcut: string | string[], handler: Handler, options: HandlerOptions = {} ): Disposer => {

    const chordseses = castArray ( shortcut ).map ( normalize ).map ( shortcut2ids );
    const nodes: HandlerNode[] = [];
    const konami = !!options.konami;

    /* REGISTER */

    for ( const chordses of chordseses ) {

      for ( const chords of chordses ) {

        let node = konami ? this.treeKonami : this.tree;
        let depth = 0;

        for ( const chord of chords ) {

          node = node.children[chord] ||= {
            children: {},
            handlers: {
              handler: nope
            }
          };

          depth += 1;

        }

        if ( konami ) {

          this.depthKonami = Math.max ( this.depthKonami, depth );

        } else {

          this.depth = Math.max ( this.depth, depth );

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
    this.treeKonami.children = {};

  };

  trigger = ( shortcut: string | number | number[], event?: KeyboardEvent | MouseEvent ) : boolean => {

    const chords = isString ( shortcut ) ? first ( shortcut2ids ( shortcut ) ) : castArray ( shortcut );
    const chordsKonami = this.chordsKonami; //TODO: Ugly, maybe there should just be two trigger functions, write this better

    if ( !chords ) return false;

    if ( this.depthKonami ) { // Triggering konami shortcuts, which are not stopped by, and don't stop, propagation

      for ( let i = 0, l = chordsKonami.length; i < l; i++ ) { // Trying all possible sequences

        const slice = i ? chordsKonami.slice ( i ) : chordsKonami;

        let node: ChordNode | undefined = this.treeKonami;

        for ( const chord of slice ) {

          node = node?.children[chord];

        }

        let handler = node?.handlers;

        while ( handler ) {

          handler.handler ( event );
          handler = handler.prev;

        }

      }

    }

    if ( this.depth ) { // Triggering regular shortcuts, which are stopped by, and stop, propagation

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
