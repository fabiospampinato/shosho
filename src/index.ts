
/* IMPORT */

import {DEFAULT_FORMAT_FORMAT, DEFAULT_RECORD_FORMAT} from './constants';
import {MODIFIER_BITMASK, TRIGGER_BITMASK, UNSUPPORTED} from './constants';
import {PLUSES_RE, WHITESPACE_RE} from './constants';
import {CODE2ID, CODE_RISKY2ID, ID2FORMAT_TITLE, ID2FORMAT_ELECTRON, ID2FORMAT_SYMBOL, KEY_UNSUPPORTED2ID, KEY2ID, MOUSE2ID, NAME2ID, NAME_FORMATTING2ID,  WHICH2ID} from './maps';
import {attempt, castArray, decompose, enumerate, first, isKeyboardEvent, isMac, isMouseEvent, isString, nope, or, orWith, uniq, without, yep} from './utils';
import type {Checker, Disposer, Format, Handler, ChordNode, HandlerNode, HandlerOptions, Options, RecordHandler, RecordOptions} from './types';

/* HELPERS */ //TODO: Maybe move these elsewhere

const has = ( id: bigint, key: bigint ): boolean => {
  return !!( id & key );
};

const id2trigger = ( id: bigint ): bigint => {
  return ( id & TRIGGER_BITMASK );
};

const shortcut2ids = ( shortcut: string, formatting: boolean = false ): bigint[][] => {
  const chords = shortcut.trim ().split ( WHITESPACE_RE );
  const parts = chords.map ( chord => chord2ids ( chord, formatting ) );
  const ids = enumerate ( parts );
  return ids;
};

const chord2ids = ( chord: string, formatting: boolean = false ): bigint[] => {
  const map = formatting ? NAME_FORMATTING2ID : NAME2ID;
  const keys = chord.replace ( PLUSES_RE, '+Plus' ).toLowerCase ().split ( '+' );
  const parts = keys.map<bigint | bigint[]> ( key => map[key] || UNSUPPORTED );
  const ids = enumerate ( parts ).map ( or );
  return ids;
};

const event2ids = ( event: Event ): bigint[] => { // Returning all possible detected ids, to support every scenario
  if ( isKeyboardEvent ( event ) ) {
    const codeId = CODE2ID[event.code] || 0n;
    if ( codeId ) return [codeId];
    const keyId = KEY2ID[event.key] || 0n;
    const whichId = WHICH2ID[event.which] || 0n;
    const codeRiskyId = KEY_UNSUPPORTED2ID[event.key] ? 0n : CODE_RISKY2ID[event.code] || 0n;
    return [keyId, whichId, codeRiskyId];
  } else if ( isMouseEvent ( event ) ) {
    return [MOUSE2ID[event.button] || 0n];
  } else {
    return [0n];
  }
};

/* MAIN */

//TODO: Support character-based shortcuts (like Shift+#), by forking the current chords, i.e. properly
//TODO: Support character-based shortcut triggering
//TODO: Support deleting shortcuts with a filter, without the disposer function
//TODO: Make sure there's always an Event object passed to handlers
//TODO: Check if the event got stopped

class ShoSho {

  /* VARIABLES */

  private active: boolean;
  private chords: bigint[];
  private chordsKonami: bigint[];
  private depth: number;
  private depthKonami: number;
  private shouldHandle: Checker;
  private options: Options;
  private recorder?: RecordHandler;

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
    this.chords = [0n];
    this.chordsKonami = [0n];
    this.depth = 0;
    this.depthKonami = 0;
    this.shouldHandle = options.shouldHandleEvent || yep;
    this.options = options;

  }

  /* PRIVATE API */

  private onBlur = (): void => { // If the tab loses focus we might not receive keyup/mouseup events

    const index = this.chords.length - 1;
    const indexKonami = this.chordsKonami.length - 1;

    this.chords[index] = 0n;
    this.chordsKonami[indexKonami] = 0n;

  };

  private onNormalize = ( event: Event ): void => { // We might be missing some keydown/keyup events, safer to check again what the state of modifiers is

    if ( !isKeyboardEvent ( event ) && !isMouseEvent ( event ) ) return;

    const {altKey, ctrlKey, metaKey, shiftKey} = event;

    const index = this.chords.length - 1;
    const indexKonami = this.chordsKonami.length - 1;
    const chord = this.chords[index];

    /* MISSING KEYDOWNS */ // We can't tell whether the left one or the right one was pressed, so we're taking a bit of a gamble on the left one //TODO: Maybe listen always to events to have that bit of data always available

    let addId = 0n;

    if ( altKey && !has ( chord, CODE2ID.AltLeft ) && !has ( chord, CODE2ID.AltRight ) ) addId |= CODE2ID.AltLeft;
    if ( ctrlKey && !has ( chord, CODE2ID.ControlLeft ) && !has ( chord, CODE2ID.ControlRight ) ) addId |= CODE2ID.ControlLeft;
    if ( metaKey && !has ( chord, CODE2ID.MetaLeft ) && !has ( chord, CODE2ID.MetaRight ) ) addId |= CODE2ID.MetaLeft;
    if ( shiftKey && !has ( chord, CODE2ID.ShiftLeft ) && !has ( chord, CODE2ID.ShiftRight ) ) addId |= CODE2ID.ShiftLeft;

    if ( addId ) {

      this.chords[index] |= addId;
      this.chordsKonami[indexKonami] |= addId;

    }

    /* MISSING KEYUPS */

    let deleteId = 0n;

    if ( !altKey ) deleteId |= CODE2ID.AltLeft | CODE2ID.AltRight;
    if ( !ctrlKey ) deleteId |= CODE2ID.ControlLeft | CODE2ID.ControlRight;
    if ( !metaKey ) deleteId |= CODE2ID.MetaLeft | CODE2ID.MetaRight;
    if ( !shiftKey ) deleteId |= CODE2ID.ShiftLeft | CODE2ID.ShiftRight;

    if ( deleteId ) {

      this.chords[index] &=~ deleteId;
      this.chordsKonami[indexKonami] &=~ deleteId;

    }

  };

  private onRecord = ( ids: bigint[] ): void => {

    if ( !this.recorder ) return;

    const shortcut = first ( orWith ( this.chords, ids ).reverse ().map ( shortcut => ShoSho.format ( shortcut, DEFAULT_RECORD_FORMAT ) ) );

    if ( !shortcut ) return;

    this.recorder ( shortcut );

  };

  private onDown = ( event: Event ): void => {

    if ( !this.shouldHandle ( event ) ) return;

    this.onNormalize ( event );

    const index = this.chords.length - 1;
    const indexKonami = this.chordsKonami.length - 1;
    const chord = this.chords[index];
    const chordKonami = this.chordsKonami[indexKonami];
    const chordNoTrigger = chord & MODIFIER_BITMASK;
    const chordKonamiNoTrigger = chordKonami & MODIFIER_BITMASK;
    const chords = ( chord === chordNoTrigger ) ? [[chord, chordKonami]] : [[chord, chordKonami], [chordNoTrigger, chordKonamiNoTrigger]]; // Not being super strict about multi-key shortcuts here
    const ids = without ( uniq ( event2ids ( event ) ), 0n );

    this.onRecord ( ids );

    for ( let i = 0, l = ids.length; i < l; i++ ) {

      const id = ids[i];
      const isLastId = ( i === l - 1 );

      for ( let ci = 0, cl = chords.length; ci < cl; ci++ ) {

        const [chord, chordKonami] = chords[ci];
        const isLastChord = ( ci === cl - 1 );

        this.chords[index] = chord | id;
        this.chordsKonami[indexKonami] = chordKonami | id;

        const handled = !this.recorder && attempt ( () => this.trigger ( this.chords, event ), false );
        const triggered = !!id2trigger ( this.chords[index] );
        const isLast = handled || ( isLastId && isLastChord );

        if ( !isLast ) continue;

        if ( handled ) {

          if ( !triggered || isMouseEvent ( event ) || chord & CODE2ID.MetaLeft || chord & CODE2ID.MetaRight ) { // Meta keys are buggy, they will swallow keyup events for the trigger

            this.chords = triggered ? [this.chords[index] &~ id] : [0n];

          }

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

        break;

      }

    }

  };

  private onUp = ( event: Event ): void => {

    if ( !this.shouldHandle ( event ) ) return;

    const index = this.chords.length - 1;
    const indexKonami = this.chordsKonami.length - 1;
    const id = or ( event2ids ( event ) );

    this.chords[index] &=~ id;
    this.chordsKonami[indexKonami] &=~ id;

  };

  /* PUBLIC API */

  record = ( handler: RecordHandler ): Disposer => {

    const isStartedAlready = this.active;

    this.recorder = handler;

    if ( !isStartedAlready ) {

      this.start ();

    }

    return (): void => {

      this.recorder = undefined;

      if ( !isStartedAlready ) {

        this.stop ();

      }

    };

  };

  register = ( shortcut: string | string[], handler: Handler, options: HandlerOptions = {} ): Disposer => {

    const chordseses = castArray ( shortcut ).map ( shortcut => shortcut2ids ( shortcut ) );
    const nodes: HandlerNode[] = [];
    const konami = !!options.konami;

    /* REGISTER */

    for ( const chordses of chordseses ) {

      for ( const chords of chordses ) {

        let node = konami ? this.treeKonami : this.tree;
        let depth = 0;

        for ( const chord of chords ) {

          node = node.children[String ( chord )] ||= {
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

  trigger = ( shortcut: string | bigint | bigint[], event?: Event ) : boolean => {

    const chords = isString ( shortcut ) ? first ( shortcut2ids ( shortcut ) ) : castArray ( shortcut );
    const chordsKonami = this.chordsKonami; //TODO: Ugly, maybe there should just be two trigger functions, write this better

    if ( !chords ) return false;

    if ( this.depthKonami ) { // Triggering konami shortcuts, which are not stopped by, and don't stop, propagation

      for ( let i = 0, l = chordsKonami.length; i < l; i++ ) { // Trying all possible sequences

        const slice = i ? chordsKonami.slice ( i ) : chordsKonami;

        let node: ChordNode | undefined = this.treeKonami;

        for ( const chord of slice ) {

          node = node?.children[String ( chord )];

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

          node = node?.children[String ( chord )];

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

    window.addEventListener ( 'blur', this.onBlur );

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

    window.removeEventListener ( 'blur', this.onBlur );

  };

  /* STATIC API */

  static format = ( shortcut: string | bigint | bigint[], format: Format = DEFAULT_FORMAT_FORMAT ): string => {

    const formatMap = ( format === 'electron' ) ? ID2FORMAT_ELECTRON : ( format === 'symbols' ) ? ID2FORMAT_SYMBOL : ID2FORMAT_TITLE;
    const formatKeysJoiner = ( format === 'symbols' ) ? '' : '+';
    const formatShortcutsJoiner = ' ';

    const chords = isString ( shortcut ) ? first ( shortcut2ids ( shortcut, true ) ) || [] : castArray ( shortcut );
    const components = chords.map ( chord => ( chord === UNSUPPORTED ) ? [] : decompose ( chord ) );

    let output = components.map ( component => component.map ( id => formatMap[id] || '§' ).join ( formatKeysJoiner ) ).join ( formatShortcutsJoiner );

    if ( format.includes ( '-nondirectional' ) ) {

      /* REMOVING LEFT/RIGHT SUFFIXES FROM MODIFIERS */

      output = output.replaceAll ( 'ControlLeft', 'Control' );
      output = output.replaceAll ( 'ControlRight', 'Control' );
      output = output.replaceAll ( 'CommandLeft', 'Command' );
      output = output.replaceAll ( 'CommandRight', 'Command' );
      output = output.replaceAll ( 'AltLeft', 'Alt' );
      output = output.replaceAll ( 'AltRight', 'Alt' );
      output = output.replaceAll ( 'ShiftLeft', 'Shift' );
      output = output.replaceAll ( 'ShiftRight', 'Shift' );

    }

    if ( format.includes ( '-inflexible' ) ) {

      /* RESOLVING FLEXIBLE MODIFIERS */

      const replacement = isMac () ? 'Command' : 'Control';

      output = output.replaceAll ( 'CommandOrControl', replacement );
      output = output.replaceAll ( 'CommandLeftOrControl', replacement );
      output = output.replaceAll ( 'CommandRightOrControl', replacement );

    }

    if ( format.includes ( '-flexible' ) ) {

      /* SPARING CONTROL+COMMAND IN A SHORTCUT */

      output = output.replace ( /Control(\S+)Command/g, '§ontrol$1§ommand' );
      output = output.replace ( /Command(\S+)Control/g, '§ommand$1§ontrol' );

      /* MAKING OTHERS CONTROLS/COMMANDS FLEXIBLE */

      output = output.replace ( /(^|\W)Control/g, '$1CommandOrControl' );
      output = output.replace ( /Command(?!Or|Left|Right)/g, 'CommandOrControl' );
      output = output.replace ( /CommandLeft(?!Or)/g, 'CommandOrControlLeft' );
      output = output.replace ( /CommandRight(?!Or)/g, 'CommandOrControlRight' );

      /* RESTORING CONTROL+COMMAND IN A SHORTCUT */

      output = output.replaceAll ( '§ontrol', 'Control' );
      output = output.replaceAll ( '§ommand', 'Command' );

    }

    if ( format.includes ( 'short-' ) ) {

      /* SHORTHENING MODIFIERS */

      output = output.replaceAll ( 'Command', 'Cmd' );
      output = output.replaceAll ( 'Control', 'Ctrl' );

    }

    return output;

  };

  static record = ( handler: RecordHandler, options: RecordOptions = {} ): Disposer => {

    const shouldHandle = options.shouldHandleEvent || yep;

    const shortcuts = new ShoSho ({
      capture: true,
      target: window,
      shouldHandleEvent: event => {
        if ( !shouldHandle ( event ) ) return false;
        event.preventDefault ();
        event.stopImmediatePropagation ();
        return true;
      }
    });

    return shortcuts.record ( handler );

  };

}

/* EXPORT */

export default ShoSho;
export type {Format, Handler, HandlerOptions, Options, RecordHandler, RecordOptions};
