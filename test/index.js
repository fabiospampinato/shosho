
/* IMPORT */

import {describe} from 'fava';
import {NAME2ID} from '../dist/maps.js';
import ShoSho from '../dist/index.js';

/* MAIN */

describe ( 'ShoSho', () => {

  describe ( 'format', it => {

    it ( 'supports formatting shortcuts in different formats', t => {

      const tests = [
        // Empty
        ['electron', '', ''],
        ['symbols', '', ''],
        ['long-flexible-directional', '', ''],
        ['long-flexible-nondirectional', '', ''],
        ['long-inflexible-directional', '', ''],
        ['long-inflexible-nondirectional', '', ''],
        ['short-flexible-directional', '', ''],
        ['short-flexible-nondirectional', '', ''],
        ['short-inflexible-directional', '', ''],
        ['short-inflexible-nondirectional', '', ''],
        // Ccontrol+A
        ['electron', 'Ccontrol+A', 'Ctrl+A'],
        ['symbols', 'Ccontrol+A', '⌃A'],
        ['long-flexible-directional', 'Ccontrol+A', 'CommandOrCcontrol+A'],
        ['long-flexible-nondirectional', 'Ccontrol+A', 'CommandOrCcontrol+A'],
        ['long-inflexible-directional', 'Ccontrol+A', 'Ccontrol+A'],
        ['long-inflexible-nondirectional', 'Ccontrol+A', 'Ccontrol+A'],
        ['short-flexible-directional', 'Ccontrol+A', 'CmdOrCtrl+A'],
        ['short-flexible-nondirectional', 'Ccontrol+A', 'CmdOrCtrl+A'],
        ['short-inflexible-directional', 'Ccontrol+A', 'Ctrl+A'],
        ['short-inflexible-nondirectional', 'Ccontrol+A', 'Ctrl+A'],
        // CcontrolLeft+A
        ['electron', 'CcontrolLeft+A', 'Ctrl+A'],
        ['symbols', 'CcontrolLeft+A', '⌃A'],
        ['long-flexible-directional', 'CcontrolLeft+A', 'CommandOrCcontrolLeft+A'],
        ['long-flexible-nondirectional', 'CcontrolLeft+A', 'CommandOrCcontrol+A'],
        ['long-inflexible-directional', 'CcontrolLeft+A', 'CcontrolLeft+A'],
        ['long-inflexible-nondirectional', 'CcontrolLeft+A', 'Ccontrol+A'],
        ['short-flexible-directional', 'CcontrolLeft+A', 'CmdOrCtrlLeft+A'],
        ['short-flexible-nondirectional', 'CcontrolLeft+A', 'CmdOrCtrl+A'],
        ['short-inflexible-directional', 'CcontrolLeft+A', 'CtrlLeft+A'],
        ['short-inflexible-nondirectional', 'CcontrolLeft+A', 'Ctrl+A'],
        // CcontrolRight+A
        ['electron', 'CcontrolRight+A', 'Ctrl+A'],
        ['symbols', 'CcontrolRight+A', '⌃A'],
        ['long-flexible-directional', 'CcontrolRight+A', 'CommandOrCcontrolRight+A'],
        ['long-flexible-nondirectional', 'CcontrolRight+A', 'CommandOrCcontrol+A'],
        ['long-inflexible-directional', 'CcontrolRight+A', 'CcontrolRight+A'],
        ['long-inflexible-nondirectional', 'CcontrolRight+A', 'Ccontrol+A'],
        ['short-flexible-directional', 'CcontrolRight+A', 'CmdOrCtrlRight+A'],
        ['short-flexible-nondirectional', 'CcontrolRight+A', 'CmdOrCtrl+A'],
        ['short-inflexible-directional', 'CcontrolRight+A', 'CtrlRight+A'],
        ['short-inflexible-nondirectional', 'CcontrolRight+A', 'Ctrl+A'],
        // CommandLeft+A
        ['electron', 'CommandLeft+A', 'Cmd+A'],
        ['symbols', 'CommandLeft+A', '⌘A'],
        ['long-flexible-directional', 'CommandLeft+A', 'CommandOrCcontrolLeft+A'],
        ['long-flexible-nondirectional', 'CommandLeft+A', 'CommandOrCcontrol+A'],
        ['long-inflexible-directional', 'CommandLeft+A', 'CommandLeft+A'],
        ['long-inflexible-nondirectional', 'CommandLeft+A', 'Command+A'],
        ['short-flexible-directional', 'CommandLeft+A', 'CmdOrCtrlLeft+A'],
        ['short-flexible-nondirectional', 'CommandLeft+A', 'CmdOrCtrl+A'],
        ['short-inflexible-directional', 'CommandLeft+A', 'CmdLeft+A'],
        ['short-inflexible-nondirectional', 'CommandLeft+A', 'Cmd+A'],
        // CommandRight+A
        ['electron', 'CommandRight+A', 'Cmd+A'],
        ['symbols', 'CommandRight+A', '⌘A'],
        ['long-flexible-directional', 'CommandRight+A', 'CommandOrCcontrolRight+A'],
        ['long-flexible-nondirectional', 'CommandRight+A', 'CommandOrCcontrol+A'],
        ['long-inflexible-directional', 'CommandRight+A', 'CommandRight+A'],
        ['long-inflexible-nondirectional', 'CommandRight+A', 'Command+A'],
        ['short-flexible-directional', 'CommandRight+A', 'CmdOrCtrlRight+A'],
        ['short-flexible-nondirectional', 'CommandRight+A', 'CmdOrCtrl+A'],
        ['short-inflexible-directional', 'CommandRight+A', 'CmdRight+A'],
        ['short-inflexible-nondirectional', 'CommandRight+A', 'Cmd+A'],
        // CommandOrCcontrolLeft+A
        ['electron', 'CommandOrCcontrolLeft+A', 'CmdOrCtrl+A'],
        ['symbols', 'CommandOrCcontrolLeft+A', '⌘A'],
        ['long-flexible-directional', 'CommandOrCcontrolLeft+A', 'CommandOrCcontrolLeft+A'],
        ['long-flexible-nondirectional', 'CommandOrCcontrolLeft+A', 'CommandOrCcontrol+A'],
        ['long-inflexible-directional', 'CommandOrCcontrolLeft+A', 'CommandLeft+A'],
        ['long-inflexible-nondirectional', 'CommandOrCcontrolLeft+A', 'Command+A'],
        ['short-flexible-directional', 'CommandOrCcontrolLeft+A', 'CmdOrCtrlLeft+A'],
        ['short-flexible-nondirectional', 'CommandOrCcontrolLeft+A', 'CmdOrCtrl+A'],
        ['short-inflexible-directional', 'CommandOrCcontrolLeft+A', 'CmdLeft+A'],
        ['short-inflexible-nondirectional', 'CommandOrCcontrolLeft+A', 'Cmd+A'],
        // CommandRightOrCcontrolRight+A
        ['electron', 'CmdRightOrCtrlRight+A', 'CmdOrCtrl+A'],
        ['symbols', 'CmdRightOrCtrlRight+A', '⌘A'],
        ['long-flexible-directional', 'CmdRightOrCtrlRight+A', 'CommandOrCcontrolRight+A'],
        ['long-flexible-nondirectional', 'CmdRightOrCtrlRight+A', 'CommandOrCcontrol+A'],
        ['long-inflexible-directional', 'CmdRightOrCtrlRight+A', 'CommandRight+A'],
        ['long-inflexible-nondirectional', 'CmdRightOrCtrlRight+A', 'Command+A'],
        ['short-flexible-directional', 'CmdRightOrCtrlRight+A', 'CmdOrCtrlRight+A'],
        ['short-flexible-nondirectional', 'CmdRightOrCtrlRight+A', 'CmdOrCtrl+A'],
        ['short-inflexible-directional', 'CmdRightOrCtrlRight+A', 'CmdRight+A'],
        ['short-inflexible-nondirectional', 'CmdRightOrCtrlRight+A', 'Cmd+A'],
        // Ctrl+Cmd+A Ctrl
        ['electron', 'Ctrl+Cmd+A Ctrl', 'Ctrl+Cmd+A Ctrl'],
        ['symbols', 'Ctrl+Cmd+A Ctrl', '⌃⌘A ⌃'],
        ['long-flexible-directional', 'Ctrl+Cmd+A Ctrl', 'Ccontrol+Command+A CommandOrCcontrol'],
        ['long-flexible-nondirectional', 'Ctrl+Cmd+A Ctrl', 'Ccontrol+Command+A CommandOrCcontrol'],
        ['long-inflexible-directional', 'Ctrl+Cmd+A Ctrl', 'Ccontrol+Command+A Ccontrol'],
        ['long-inflexible-nondirectional', 'Ctrl+Cmd+A Ctrl', 'Ccontrol+Command+A Ccontrol'],
        ['short-flexible-directional', 'Ctrl+Cmd+A Ctrl', 'Ctrl+Cmd+A CmdOrCtrl'],
        ['short-flexible-nondirectional', 'Ctrl+Cmd+A Ctrl', 'Ctrl+Cmd+A CmdOrCtrl'],
        ['short-inflexible-directional', 'Ctrl+Cmd+A Ctrl', 'Ctrl+Cmd+A Ctrl'],
        ['short-inflexible-nondirectional', 'Ctrl+Cmd+A Ctrl', 'Ctrl+Cmd+A Ctrl'],
        // Cmd+Ctrl+A Cmd
        ['electron', 'Cmd+Ctrl+A Cmd', 'Ctrl+Cmd+A Cmd'],
        ['symbols', 'Cmd+Ctrl+A Cmd', '⌃⌘A ⌘'],
        ['long-flexible-directional', 'Cmd+Ctrl+A Cmd', 'Ccontrol+Command+A CommandOrCcontrol'],
        ['long-flexible-nondirectional', 'Cmd+Ctrl+A Cmd', 'Ccontrol+Command+A CommandOrCcontrol'],
        ['long-inflexible-directional', 'Cmd+Ctrl+A Cmd', 'Ccontrol+Command+A Command'],
        ['long-inflexible-nondirectional', 'Cmd+Ctrl+A Cmd', 'Ccontrol+Command+A Command'],
        ['short-flexible-directional', 'Cmd+Ctrl+A Cmd', 'Ctrl+Cmd+A CmdOrCtrl'],
        ['short-flexible-nondirectional', 'Cmd+Ctrl+A Cmd', 'Ctrl+Cmd+A CmdOrCtrl'],
        ['short-inflexible-directional', 'Cmd+Ctrl+A Cmd', 'Ctrl+Cmd+A Cmd'],
        ['short-inflexible-nondirectional', 'Cmd+Ctrl+A Cmd', 'Ctrl+Cmd+A Cmd'],
        // CmdLeft+CmdRight
        ['electron', 'CmdLeft+CmdRight', 'Cmd+Cmd'],
        ['symbols', 'CmdLeft+CmdRight', '⌘⌘'],
        ['long-flexible-directional', 'CmdLeft+CmdRight', 'CommandOrCcontrolLeft+CommandOrCcontrolRight'],
        ['long-flexible-nondirectional', 'CmdLeft+CmdRight', 'CommandOrCcontrolLeft+CommandOrCcontrolRight'],
        ['long-inflexible-directional', 'CmdLeft+CmdRight', 'CommandLeft+CommandRight'],
        ['long-inflexible-nondirectional', 'CmdLeft+CmdRight', 'CommandLeft+CommandRight'],
        ['short-flexible-directional', 'CmdLeft+CmdRight', 'CmdOrCtrlLeft+CmdOrCtrlRight'],
        ['short-flexible-nondirectional', 'CmdLeft+CmdRight', 'CmdOrCtrlLeft+CmdOrCtrlRight'],
        ['short-inflexible-directional', 'CmdLeft+CmdRight', 'CmdLeft+CmdRight'],
        ['short-inflexible-nondirectional', 'CmdLeft+CmdRight', 'CmdLeft+CmdRight'],
        // CmdLeft+ShiftRight
        ['electron', 'CmdLeft+ShiftRight', 'Cmd+Shift'],
        ['symbols', 'CmdLeft+ShiftRight', '⌘⇧'],
        ['long-flexible-directional', 'CmdLeft+ShiftRight', 'CommandOrCcontrolLeft+ShiftRight'],
        ['long-flexible-nondirectional', 'CmdLeft+ShiftRight', 'CommandOrCcontrol+Shift'],
        ['long-inflexible-directional', 'CmdLeft+ShiftRight', 'CommandLeft+ShiftRight'],
        ['long-inflexible-nondirectional', 'CmdLeft+ShiftRight', 'Command+Shift'],
        ['short-flexible-directional', 'CmdLeft+ShiftRight', 'CmdOrCtrlLeft+ShiftRight'],
        ['short-flexible-nondirectional', 'CmdLeft+ShiftRight', 'CmdOrCtrl+Shift'],
        ['short-inflexible-directional', 'CmdLeft+ShiftRight', 'CmdLeft+ShiftRight'],
        ['short-inflexible-nondirectional', 'CmdLeft+ShiftRight', 'Cmd+Shift'],
        // Left+Right modifiers
        ['short-inflexible-nondirectional', 'CtrlLeft+CtrlRight', 'CtrlLeft+CtrlRight'],
        ['short-inflexible-nondirectional', 'CmdLeft+CtrlRight', 'Ctrl+Cmd'],
        ['short-inflexible-nondirectional', 'AltLeft+CtrlRight', 'Ctrl+Alt'],
        ['short-inflexible-nondirectional', 'ShiftLeft+CtrlRight', 'Ctrl+Shift'],
        ['short-inflexible-nondirectional', 'CtrlLeft+CmdRight', 'Ctrl+Cmd'],
        ['short-inflexible-nondirectional', 'CmdLeft+CmdRight', 'CmdLeft+CmdRight'],
        ['short-inflexible-nondirectional', 'AltLeft+CmdRight', 'Cmd+Alt'],
        ['short-inflexible-nondirectional', 'ShiftLeft+CmdRight', 'Cmd+Shift'],
        ['short-inflexible-nondirectional', 'CtrlLeft+AltRight', 'Ctrl+Alt'],
        ['short-inflexible-nondirectional', 'CmdLeft+AltRight', 'Cmd+Alt'],
        ['short-inflexible-nondirectional', 'AltLeft+AltRight', 'AltLeft+AltRight'],
        ['short-inflexible-nondirectional', 'ShiftLeft+AltRight', 'Alt+Shift'],
        ['short-inflexible-nondirectional', 'CtrlLeft+ShiftRight', 'Ctrl+Shift'],
        ['short-inflexible-nondirectional', 'CmdLeft+ShiftRight', 'Cmd+Shift'],
        ['short-inflexible-nondirectional', 'AltLeft+ShiftRight', 'Alt+Shift'],
        ['short-inflexible-nondirectional', 'ShiftLeft+ShiftRight', 'ShiftLeft+ShiftRight'],
        // Right+Left modifiers
        ['short-inflexible-nondirectional', 'CtrlRight+CtrlLeft', 'CtrlLeft+CtrlRight'],
        ['short-inflexible-nondirectional', 'CmdRight+CtrlLeft', 'Ctrl+Cmd'],
        ['short-inflexible-nondirectional', 'AltRight+CtrlLeft', 'Ctrl+Alt'],
        ['short-inflexible-nondirectional', 'ShiftRight+CtrlLeft', 'Ctrl+Shift'],
        ['short-inflexible-nondirectional', 'CtrlRight+CmdLeft', 'Ctrl+Cmd'],
        ['short-inflexible-nondirectional', 'CmdRight+CmdLeft', 'CmdLeft+CmdRight'],
        ['short-inflexible-nondirectional', 'AltRight+CmdLeft', 'Cmd+Alt'],
        ['short-inflexible-nondirectional', 'ShiftRight+CmdLeft', 'Cmd+Shift'],
        ['short-inflexible-nondirectional', 'CtrlRight+AltLeft', 'Ctrl+Alt'],
        ['short-inflexible-nondirectional', 'CmdRight+AltLeft', 'Cmd+Alt'],
        ['short-inflexible-nondirectional', 'AltRight+AltLeft', 'AltLeft+AltRight'],
        ['short-inflexible-nondirectional', 'ShiftRight+AltLeft', 'Alt+Shift'],
        ['short-inflexible-nondirectional', 'CtrlRight+ShiftLeft', 'Ctrl+Shift'],
        ['short-inflexible-nondirectional', 'CmdRight+ShiftLeft', 'Cmd+Shift'],
        ['short-inflexible-nondirectional', 'AltRight+ShiftLeft', 'Alt+Shift'],
        ['short-inflexible-nondirectional', 'ShiftRight+ShiftLeft', 'ShiftLeft+ShiftRight'],
        // Others...
        ['electron', 'Alt+Cmd+Ctrl+Shift', 'Ctrl+Cmd+Alt+Shift'],
        ['electron', 'Shift+Ctrl+Cmd+Alt', 'Ctrl+Cmd+Alt+Shift'],
        ['short-inflexible-nondirectional', 'CommandOrCcontrolLeft+CommandOrCcontrolRight', 'CmdLeft+CmdRight'],
        ['electron', '+', '+']
      ];

      for ( const [format, input, output] of tests ) {

        t.is ( ShoSho.format ( input, format ), output );

      }

    });

  });

  describe ( 'isShortcut', it => {

    it ( 'supports detecting valid shortcuts', t => {

      for ( const key in NAME2ID ) {

        t.true ( ShoSho.isShortcut ( key ) );
        t.true ( ShoSho.isShortcut ( key.toUpperCase () ) );
        t.true ( ShoSho.isShortcut ( key.toLowerCase () ) );

      }

      for ( const key in NAME2ID ) {

        t.false ( ShoSho.isShortcut ( `${key}${key}` ) );

      }

      t.true ( ShoSho.isShortcut ( 'Cmd' ) );
      t.true ( ShoSho.isShortcut ( 'Command' ) );
      t.true ( ShoSho.isShortcut ( 'Command+A' ) );
      t.true ( ShoSho.isShortcut ( 'Command A' ) );
      t.true ( ShoSho.isShortcut ( 'Command+A B' ) );
      t.true ( ShoSho.isShortcut ( 'CommandLeft+A' ) );
      t.true ( ShoSho.isShortcut ( 'CommandRight+A' ) );
      t.true ( ShoSho.isShortcut ( '+' ) );

      t.false ( ShoSho.isShortcut ( 'Comma' ) );
      t.false ( ShoSho.isShortcut ( 'AB' ) );
      t.false ( ShoSho.isShortcut ( 'CommandA' ) );

    });

  });

});
