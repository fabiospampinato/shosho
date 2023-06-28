
/* IMPORT */

import {describe} from 'fava';
import ShoSho from '../dist/index.js';

/* MAIN */

describe ( 'ShoSho', () => {

  describe ( 'format', it => {

    it ( 'supports formatting shortcuts in different formats', t => {

      const tests = [
        // Control+A
        ['electron', 'Control+A', 'Ctrl+A'],
        ['symbols', 'Control+A', '⌃A'],
        ['long-flexible-directional', 'Control+A', 'CommandOrControl+A'],
        ['long-flexible-nondirectional', 'Control+A', 'CommandOrControl+A'],
        ['long-inflexible-directional', 'Control+A', 'Control+A'],
        ['long-inflexible-nondirectional', 'Control+A', 'Control+A'],
        ['short-flexible-directional', 'Control+A', 'CmdOrCtrl+A'],
        ['short-flexible-nondirectional', 'Control+A', 'CmdOrCtrl+A'],
        ['short-inflexible-directional', 'Control+A', 'Ctrl+A'],
        ['short-inflexible-nondirectional', 'Control+A', 'Ctrl+A'],
        // ControlLeft+A
        ['electron', 'ControlLeft+A', 'Ctrl+A'],
        ['symbols', 'ControlLeft+A', '⌃A'],
        ['long-flexible-directional', 'ControlLeft+A', 'CommandOrControlLeft+A'],
        ['long-flexible-nondirectional', 'ControlLeft+A', 'CommandOrControl+A'],
        ['long-inflexible-directional', 'ControlLeft+A', 'ControlLeft+A'],
        ['long-inflexible-nondirectional', 'ControlLeft+A', 'Control+A'],
        ['short-flexible-directional', 'ControlLeft+A', 'CmdOrCtrlLeft+A'],
        ['short-flexible-nondirectional', 'ControlLeft+A', 'CmdOrCtrl+A'],
        ['short-inflexible-directional', 'ControlLeft+A', 'CtrlLeft+A'],
        ['short-inflexible-nondirectional', 'ControlLeft+A', 'Ctrl+A'],
        // ControlRight+A
        ['electron', 'ControlRight+A', 'Ctrl+A'],
        ['symbols', 'ControlRight+A', '⌃A'],
        ['long-flexible-directional', 'ControlRight+A', 'CommandOrControlRight+A'],
        ['long-flexible-nondirectional', 'ControlRight+A', 'CommandOrControl+A'],
        ['long-inflexible-directional', 'ControlRight+A', 'ControlRight+A'],
        ['long-inflexible-nondirectional', 'ControlRight+A', 'Control+A'],
        ['short-flexible-directional', 'ControlRight+A', 'CmdOrCtrlRight+A'],
        ['short-flexible-nondirectional', 'ControlRight+A', 'CmdOrCtrl+A'],
        ['short-inflexible-directional', 'ControlRight+A', 'CtrlRight+A'],
        ['short-inflexible-nondirectional', 'ControlRight+A', 'Ctrl+A'],
        // CommandLeft+A
        ['electron', 'CommandLeft+A', 'Cmd+A'],
        ['symbols', 'CommandLeft+A', '⌘A'],
        ['long-flexible-directional', 'CommandLeft+A', 'CommandOrControlLeft+A'],
        ['long-flexible-nondirectional', 'CommandLeft+A', 'CommandOrControl+A'],
        ['long-inflexible-directional', 'CommandLeft+A', 'CommandLeft+A'],
        ['long-inflexible-nondirectional', 'CommandLeft+A', 'Command+A'],
        ['short-flexible-directional', 'CommandLeft+A', 'CmdOrCtrlLeft+A'],
        ['short-flexible-nondirectional', 'CommandLeft+A', 'CmdOrCtrl+A'],
        ['short-inflexible-directional', 'CommandLeft+A', 'CmdLeft+A'],
        ['short-inflexible-nondirectional', 'CommandLeft+A', 'Cmd+A'],
        // CommandRight+A
        ['electron', 'CommandRight+A', 'Cmd+A'],
        ['symbols', 'CommandRight+A', '⌘A'],
        ['long-flexible-directional', 'CommandRight+A', 'CommandOrControlRight+A'],
        ['long-flexible-nondirectional', 'CommandRight+A', 'CommandOrControl+A'],
        ['long-inflexible-directional', 'CommandRight+A', 'CommandRight+A'],
        ['long-inflexible-nondirectional', 'CommandRight+A', 'Command+A'],
        ['short-flexible-directional', 'CommandRight+A', 'CmdOrCtrlRight+A'],
        ['short-flexible-nondirectional', 'CommandRight+A', 'CmdOrCtrl+A'],
        ['short-inflexible-directional', 'CommandRight+A', 'CmdRight+A'],
        ['short-inflexible-nondirectional', 'CommandRight+A', 'Cmd+A'],
        // CommandOrControlLeft+A
        ['electron', 'CommandOrControlLeft+A', 'CmdOrCtrl+A'],
        ['symbols', 'CommandOrControlLeft+A', '⌘A'],
        ['long-flexible-directional', 'CommandOrControlLeft+A', 'CommandOrControlLeft+A'],
        ['long-flexible-nondirectional', 'CommandOrControlLeft+A', 'CommandOrControl+A'],
        ['long-inflexible-directional', 'CommandOrControlLeft+A', 'CommandLeft+A'],
        ['long-inflexible-nondirectional', 'CommandOrControlLeft+A', 'Command+A'],
        ['short-flexible-directional', 'CommandOrControlLeft+A', 'CmdOrCtrlLeft+A'],
        ['short-flexible-nondirectional', 'CommandOrControlLeft+A', 'CmdOrCtrl+A'],
        ['short-inflexible-directional', 'CommandOrControlLeft+A', 'CmdLeft+A'],
        ['short-inflexible-nondirectional', 'CommandOrControlLeft+A', 'Cmd+A'],
        // CommandRightOrControlRight+A
        ['electron', 'CmdRightOrCtrlRight+A', 'CmdOrCtrl+A'],
        ['symbols', 'CmdRightOrCtrlRight+A', '⌘A'],
        ['long-flexible-directional', 'CmdRightOrCtrlRight+A', 'CommandOrControlRight+A'],
        ['long-flexible-nondirectional', 'CmdRightOrCtrlRight+A', 'CommandOrControl+A'],
        ['long-inflexible-directional', 'CmdRightOrCtrlRight+A', 'CommandRight+A'],
        ['long-inflexible-nondirectional', 'CmdRightOrCtrlRight+A', 'Command+A'],
        ['short-flexible-directional', 'CmdRightOrCtrlRight+A', 'CmdOrCtrlRight+A'],
        ['short-flexible-nondirectional', 'CmdRightOrCtrlRight+A', 'CmdOrCtrl+A'],
        ['short-inflexible-directional', 'CmdRightOrCtrlRight+A', 'CmdRight+A'],
        ['short-inflexible-nondirectional', 'CmdRightOrCtrlRight+A', 'Cmd+A'],
        // Ctrl+Cmd+A Ctrl
        ['electron', 'Ctrl+Cmd+A Ctrl', 'Ctrl+Cmd+A Ctrl'],
        ['symbols', 'Ctrl+Cmd+A Ctrl', '⌃⌘A ⌃'],
        ['long-flexible-directional', 'Ctrl+Cmd+A Ctrl', 'Control+Command+A CommandOrControl'],
        ['long-flexible-nondirectional', 'Ctrl+Cmd+A Ctrl', 'Control+Command+A CommandOrControl'],
        ['long-inflexible-directional', 'Ctrl+Cmd+A Ctrl', 'Control+Command+A Control'],
        ['long-inflexible-nondirectional', 'Ctrl+Cmd+A Ctrl', 'Control+Command+A Control'],
        ['short-flexible-directional', 'Ctrl+Cmd+A Ctrl', 'Ctrl+Cmd+A CmdOrCtrl'],
        ['short-flexible-nondirectional', 'Ctrl+Cmd+A Ctrl', 'Ctrl+Cmd+A CmdOrCtrl'],
        ['short-inflexible-directional', 'Ctrl+Cmd+A Ctrl', 'Ctrl+Cmd+A Ctrl'],
        ['short-inflexible-nondirectional', 'Ctrl+Cmd+A Ctrl', 'Ctrl+Cmd+A Ctrl'],
        // Cmd+Ctrl+A Cmd
        ['electron', 'Cmd+Ctrl+A Cmd', 'Ctrl+Cmd+A Cmd'],
        ['symbols', 'Cmd+Ctrl+A Cmd', '⌃⌘A ⌘'],
        ['long-flexible-directional', 'Cmd+Ctrl+A Cmd', 'Control+Command+A CommandOrControl'],
        ['long-flexible-nondirectional', 'Cmd+Ctrl+A Cmd', 'Control+Command+A CommandOrControl'],
        ['long-inflexible-directional', 'Cmd+Ctrl+A Cmd', 'Control+Command+A Command'],
        ['long-inflexible-nondirectional', 'Cmd+Ctrl+A Cmd', 'Control+Command+A Command'],
        ['short-flexible-directional', 'Cmd+Ctrl+A Cmd', 'Ctrl+Cmd+A CmdOrCtrl'],
        ['short-flexible-nondirectional', 'Cmd+Ctrl+A Cmd', 'Ctrl+Cmd+A CmdOrCtrl'],
        ['short-inflexible-directional', 'Cmd+Ctrl+A Cmd', 'Ctrl+Cmd+A Cmd'],
        ['short-inflexible-nondirectional', 'Cmd+Ctrl+A Cmd', 'Ctrl+Cmd+A Cmd'],
        // CmdLeft+CmdRight
        ['electron', 'CmdLeft+CmdRight', 'Cmd+Cmd'],
        ['symbols', 'CmdLeft+CmdRight', '⌘⌘'],
        ['long-flexible-directional', 'CmdLeft+CmdRight', 'CommandOrControlLeft+CommandOrControlRight'],
        ['long-flexible-nondirectional', 'CmdLeft+CmdRight', 'CommandOrControlLeft+CommandOrControlRight'],
        ['long-inflexible-directional', 'CmdLeft+CmdRight', 'CommandLeft+CommandRight'],
        ['long-inflexible-nondirectional', 'CmdLeft+CmdRight', 'CommandLeft+CommandRight'],
        ['short-flexible-directional', 'CmdLeft+CmdRight', 'CmdOrCtrlLeft+CmdOrCtrlRight'],
        ['short-flexible-nondirectional', 'CmdLeft+CmdRight', 'CmdOrCtrlLeft+CmdOrCtrlRight'],
        ['short-inflexible-directional', 'CmdLeft+CmdRight', 'CmdLeft+CmdRight'],
        ['short-inflexible-nondirectional', 'CmdLeft+CmdRight', 'CmdLeft+CmdRight'],
        // CmdLeft+ShiftRight
        ['electron', 'CmdLeft+ShiftRight', 'Cmd+Shift'],
        ['symbols', 'CmdLeft+ShiftRight', '⌘⇧'],
        ['long-flexible-directional', 'CmdLeft+ShiftRight', 'CommandOrControlLeft+ShiftRight'],
        ['long-flexible-nondirectional', 'CmdLeft+ShiftRight', 'CommandOrControl+Shift'],
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
        ['short-inflexible-nondirectional', 'CommandOrControlLeft+CommandOrControlRight', 'CmdLeft+CmdRight'],
        ['electron', '+', '+']
      ];

      for ( const [format, input, output] of tests ) {

        t.is ( ShoSho.format ( input, format ), output );

      }

    });

  });

});
