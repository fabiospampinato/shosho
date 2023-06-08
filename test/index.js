
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
        // Others...
        ['electron', 'Alt+Cmd+Ctrl+Shift', 'Ctrl+Cmd+Alt+Shift'],
        ['electron', 'Shift+Ctrl+Cmd+Alt', 'Ctrl+Cmd+Alt+Shift']
      ];

      for ( const [format, input, output] of tests ) {

        t.is ( ShoSho.format ( input, format ), output );

      }

    });

  });

});
