
/* IMPORT */

import ShoSho from '../src';

/* HELPERS */

const yep = message => {
  return () => {
    console.log ( `✅ ${message}` );
    return true;
  };
};

const nope = message => {
  return () => {
    console.log ( `❌ ${message}` );
    return false;
  };
};

/* MAIN - LISTENING */

const shortcuts = new ShoSho ();

shortcuts.register ( '0', yep ( '0' ) );
shortcuts.register ( '1', yep ( '1' ) );
shortcuts.register ( '2', yep ( '2' ) );
shortcuts.register ( '3', yep ( '3' ) );
shortcuts.register ( '4', yep ( '4' ) );
shortcuts.register ( '5', yep ( '5' ) );
shortcuts.register ( '6', yep ( '6' ) );
shortcuts.register ( '7', yep ( '7' ) );
shortcuts.register ( '8', yep ( '8' ) );
shortcuts.register ( '9', yep ( '9' ) );

shortcuts.register ( 'A', yep ( 'A' ) );
shortcuts.register ( 'B', yep ( 'B' ) );
shortcuts.register ( 'C', yep ( 'C' ) );
shortcuts.register ( 'D', yep ( 'D' ) );
shortcuts.register ( 'E', yep ( 'E' ) );
shortcuts.register ( 'F', yep ( 'F' ) );
shortcuts.register ( 'G', yep ( 'G' ) );
shortcuts.register ( 'H', yep ( 'H' ) );
shortcuts.register ( 'I', yep ( 'I' ) );
shortcuts.register ( 'J', yep ( 'J' ) );
shortcuts.register ( 'K', yep ( 'K' ) );
shortcuts.register ( 'L', yep ( 'L' ) );
shortcuts.register ( 'M', yep ( 'M' ) );
shortcuts.register ( 'N', yep ( 'N' ) );
shortcuts.register ( 'O', yep ( 'O' ) );
shortcuts.register ( 'P', yep ( 'P' ) );
shortcuts.register ( 'Q', yep ( 'Q' ) );
shortcuts.register ( 'R', yep ( 'R' ) );
shortcuts.register ( 'S', yep ( 'S' ) );
shortcuts.register ( 'T', yep ( 'T' ) );
shortcuts.register ( 'U', yep ( 'U' ) );
shortcuts.register ( 'V', yep ( 'V' ) );
shortcuts.register ( 'W', yep ( 'W' ) );
shortcuts.register ( 'X', yep ( 'X' ) );
shortcuts.register ( 'Y', yep ( 'Y' ) );
shortcuts.register ( 'Z', yep ( 'Z' ) );

shortcuts.register ( 'F1', yep ( 'F1' ) );
shortcuts.register ( 'F2', yep ( 'F2' ) );
shortcuts.register ( 'F3', yep ( 'F3' ) );
shortcuts.register ( 'F4', yep ( 'F4' ) );
shortcuts.register ( 'F5', yep ( 'F5' ) );
shortcuts.register ( 'F6', yep ( 'F6' ) );
shortcuts.register ( 'F7', yep ( 'F7' ) );
shortcuts.register ( 'F8', yep ( 'F8' ) );
shortcuts.register ( 'F9', yep ( 'F9' ) );
shortcuts.register ( 'F10', yep ( 'F10' ) );
shortcuts.register ( 'F11', yep ( 'F11' ) );
shortcuts.register ( 'F12', yep ( 'F12' ) );
shortcuts.register ( 'F13', yep ( 'F13' ) );
shortcuts.register ( 'F14', yep ( 'F14' ) );
shortcuts.register ( 'F15', yep ( 'F15' ) );
shortcuts.register ( 'F16', yep ( 'F16' ) );
shortcuts.register ( 'F17', yep ( 'F17' ) );
shortcuts.register ( 'F18', yep ( 'F18' ) );
shortcuts.register ( 'F19', yep ( 'F19' ) );
shortcuts.register ( 'F20', yep ( 'F20' ) );
shortcuts.register ( 'F21', yep ( 'F21' ) );
shortcuts.register ( 'F22', yep ( 'F22' ) );
shortcuts.register ( 'F23', yep ( 'F23' ) );
shortcuts.register ( 'F24', yep ( 'F24' ) );

shortcuts.register ( 'Numpad0', yep ( 'Numpad0' ) );
shortcuts.register ( 'Numpad1', yep ( 'Numpad1' ) );
shortcuts.register ( 'Numpad2', yep ( 'Numpad2' ) );
shortcuts.register ( 'Numpad3', yep ( 'Numpad3' ) );
shortcuts.register ( 'Numpad4', yep ( 'Numpad4' ) );
shortcuts.register ( 'Numpad5', yep ( 'Numpad5' ) );
shortcuts.register ( 'Numpad6', yep ( 'Numpad6' ) );
shortcuts.register ( 'Numpad7', yep ( 'Numpad7' ) );
shortcuts.register ( 'Numpad8', yep ( 'Numpad8' ) );
shortcuts.register ( 'Numpad9', yep ( 'Numpad9' ) );

shortcuts.register ( 'NumpadAdd', yep ( 'NumpadAdd' ) );
shortcuts.register ( 'NumpadComma', yep ( 'NumpadComma' ) );
shortcuts.register ( 'NumpadDecimal', yep ( 'NumpadDecimal' ) );
shortcuts.register ( 'NumpadDivide', yep ( 'NumpadDivide' ) );
shortcuts.register ( 'NumpadEnter', yep ( 'NumpadEnter' ) );
shortcuts.register ( 'NumpadEqual', yep ( 'NumpadEqual' ) );
shortcuts.register ( 'NumpadMultiply', yep ( 'NumpadMultiply' ) );
shortcuts.register ( 'NumpadSubtract', yep ( 'NumpadSubtract' ) );

shortcuts.register ( 'Left+Up', nope ( 'Left+Up' ) );
shortcuts.register ( 'Right+Up', nope ( 'Right+Up' ) );
shortcuts.register ( 'Left+Down', nope ( 'Left+Down' ) );
shortcuts.register ( 'Right+Down', nope ( 'Right+Down' ) );
shortcuts.register ( 'Left+Right', nope ( 'Left+Right' ) );
shortcuts.register ( 'Up+Down', nope ( 'Up+Down' ) );

shortcuts.register ( 'Down', yep ( 'Down' ) );
shortcuts.register ( 'Left', yep ( 'Left' ) );
shortcuts.register ( 'Right', yep ( 'Right' ) );
shortcuts.register ( 'Up', yep ( 'Up' ) );

shortcuts.register ( 'Backspace', yep ( 'Backspace' ) );
shortcuts.register ( 'CapsLock', yep ( 'CapsLock' ) );
shortcuts.register ( 'Delete', yep ( 'Delete' ) );
shortcuts.register ( 'End', yep ( 'End' ) );
shortcuts.register ( 'Enter', yep ( 'Enter' ) );
shortcuts.register ( 'Escape', yep ( 'Escape' ) );
shortcuts.register ( 'Home', yep ( 'Home' ) );
shortcuts.register ( 'Insert', yep ( 'Insert' ) );
shortcuts.register ( 'PageDown', yep ( 'PageDown' ) );
shortcuts.register ( 'PageUp', yep ( 'PageUp' ) );
shortcuts.register ( 'Space', yep ( 'Space' ) );
shortcuts.register ( 'Tab', yep ( 'Tab' ) );

shortcuts.register ( 'NumLock', yep ( 'NumLock' ) );
shortcuts.register ( 'ScrollLock', yep ( 'ScrollLock' ) );

// shortcuts.register ( 'AltLeft', nope ( 'AltLeft' ) );
// shortcuts.register ( 'AltRight', nope ( 'AltRight' ) );
// shortcuts.register ( 'Alt', nope ( 'Alt' ) );
// shortcuts.register ( 'OptionLeft', nope ( 'OptionLeft' ) );
// shortcuts.register ( 'OptionRight', nope ( 'OptionRight' ) );
// shortcuts.register ( 'Option', nope ( 'Option' ) );
// shortcuts.register ( 'CmdLeft', nope ( 'CmdLeft' ) );
// shortcuts.register ( 'CmdRight', nope ( 'CmdRight' ) );
// shortcuts.register ( 'Cmd', nope ( 'Cmd' ) );
// shortcuts.register ( 'CommandLeft', nope ( 'CommandLeft' ) );
// shortcuts.register ( 'CommandRight', nope ( 'CommandRight' ) );
// shortcuts.register ( 'Command', nope ( 'Command' ) );
// shortcuts.register ( 'MetaLeft', nope ( 'MetaLeft' ) );
// shortcuts.register ( 'MetaRight', nope ( 'MetaRight' ) );
// shortcuts.register ( 'Meta', nope ( 'Meta' ) );
// shortcuts.register ( 'CtrlLeft', nope ( 'CtrlLeft' ) );
// shortcuts.register ( 'CtrlRight', nope ( 'CtrlRight' ) );
// shortcuts.register ( 'Ctrl', nope ( 'Ctrl' ) );
// shortcuts.register ( 'ControlLeft', nope ( 'ControlLeft' ) );
// shortcuts.register ( 'ControlRight', nope ( 'ControlRight' ) );
// shortcuts.register ( 'Control', nope ( 'Control' ) );
// shortcuts.register ( 'ShiftLeft', nope ( 'ShiftLeft' ) );
// shortcuts.register ( 'ShiftRight', nope ( 'ShiftRight' ) );
// shortcuts.register ( 'Shift', nope ( 'Shift' ) );
// shortcuts.register ( 'CmdLeftOrCtrlLeft', nope ( 'CmdLeftOrCtrlLeft' ) );
// shortcuts.register ( 'CmdRightOrCtrlRight', nope ( 'CmdRightOrCtrlRight' ) );
// shortcuts.register ( 'CmdOrCtrl', nope ( 'CmdOrCtrl' ) );
// shortcuts.register ( 'CommandLeftOrControlLeft', nope ( 'CommandLeftOrControlLeft' ) );
// shortcuts.register ( 'CommandRightOrControlRight', nope ( 'CommandRightOrControlRight' ) );
// shortcuts.register ( 'CommandOrControl', nope ( 'CommandOrControl' ) );

shortcuts.register ( '!', nope ( 'ExclationMark' ) );
shortcuts.register ( '"', nope ( 'DoubleQuote' ) );
shortcuts.register ( '#', nope ( 'Hash' ) );
shortcuts.register ( '$', nope ( 'Dollar' ) );
shortcuts.register ( '%', nope ( 'Percent' ) );
shortcuts.register ( '&', nope ( 'Ampersand' ) );
shortcuts.register ( '\'', nope ( 'Quote' ) );
shortcuts.register ( '(', nope ( 'ParenthesisLeft' ) );
shortcuts.register ( ')', nope ( 'ParenthesisRight' ) );
shortcuts.register ( '*', nope ( 'Asterisk' ) );
shortcuts.register ( '+', nope ( 'Plus' ) );
shortcuts.register ( ',', nope ( 'Comma' ) );
shortcuts.register ( '-', nope ( 'Minus' ) );
shortcuts.register ( '.', nope ( 'Period' ) );
shortcuts.register ( '/', nope ( 'Slash' ) );
shortcuts.register ( ':', nope ( 'Colon' ) );
shortcuts.register ( ';', nope ( 'Semicolon' ) );
shortcuts.register ( '<', nope ( 'LessThan' ) );
shortcuts.register ( '=', nope ( 'Equal' ) );
shortcuts.register ( '>', nope ( 'GreaterThan' ) );
shortcuts.register ( '?', nope ( 'QuestionMark' ) );
shortcuts.register ( '@', nope ( 'At' ) );
shortcuts.register ( '[', nope ( 'BracketLeft' ) );
shortcuts.register ( '\\', nope ( 'Backslash' ) );
shortcuts.register ( ']', nope ( 'BracketRight' ) );
shortcuts.register ( '^', nope ( 'Caret' ) );
shortcuts.register ( '_', nope ( 'Underscore' ) );
shortcuts.register ( '`', nope ( 'Backquote' ) );
shortcuts.register ( '{', nope ( 'BraceLeft' ) );
shortcuts.register ( '|', nope ( 'Pipe' ) );
shortcuts.register ( '}', nope ( 'BraceRight' ) );
shortcuts.register ( '~', nope ( 'Tilde' ) );

shortcuts.register ( 'Shift+Plus', nope ( 'Shift+Plus (Alias)' ) );
shortcuts.register ( 'Shift+!', nope ( 'Shift+ExclationMark' ) );
shortcuts.register ( 'Shift+"', nope ( 'Shift+DoubleQuote' ) );
shortcuts.register ( 'Shift+#', nope ( 'Shift+Hash' ) );
shortcuts.register ( 'Shift+$', nope ( 'Shift+Dollar' ) );
shortcuts.register ( 'Shift+%', nope ( 'Shift+Percent' ) );
shortcuts.register ( 'Shift+&', nope ( 'Shift+Ampersand' ) );
shortcuts.register ( 'Shift+\'', nope ( 'Shift+Quote' ) );
shortcuts.register ( 'Shift+(', nope ( 'Shift+ParenthesisLeft' ) );
shortcuts.register ( 'Shift+)', nope ( 'Shift+ParenthesisRight' ) );
shortcuts.register ( 'Shift+*', nope ( 'Shift+Asterisk' ) );
shortcuts.register ( 'Shift++', nope ( 'Shift+Plus' ) );
shortcuts.register ( 'Shift+,', nope ( 'Shift+Comma' ) );
shortcuts.register ( 'Shift+-', nope ( 'Shift+Minus' ) );
shortcuts.register ( 'Shift+.', nope ( 'Shift+Period' ) );
shortcuts.register ( 'Shift+/', nope ( 'Shift+Slash' ) );
shortcuts.register ( 'Shift+:', nope ( 'Shift+Colon' ) );
shortcuts.register ( 'Shift+;', nope ( 'Shift+Semicolon' ) );
shortcuts.register ( 'Shift+<', nope ( 'Shift+LessThan' ) );
shortcuts.register ( 'Shift+=', nope ( 'Shift+Equal' ) );
shortcuts.register ( 'Shift+>', nope ( 'Shift+GreaterThan' ) );
shortcuts.register ( 'Shift+?', nope ( 'Shift+QuestionMark' ) );
shortcuts.register ( 'Shift+@', nope ( 'Shift+At' ) );
shortcuts.register ( 'Shift+[', nope ( 'Shift+BracketLeft' ) );
shortcuts.register ( 'Shift+\\', nope ( 'Shift+Backslash' ) );
shortcuts.register ( 'Shift+]', nope ( 'Shift+BracketRight' ) );
shortcuts.register ( 'Shift+^', nope ( 'Shift+Caret' ) );
shortcuts.register ( 'Shift+_', nope ( 'Shift+Underscore' ) );
shortcuts.register ( 'Shift+`', nope ( 'Shift+Backquote' ) );
shortcuts.register ( 'Shift+{', nope ( 'Shift+BraceLeft' ) );
shortcuts.register ( 'Shift+|', nope ( 'Shift+Pipe' ) );
shortcuts.register ( 'Shift+}', nope ( 'Shift+BraceRight' ) );
shortcuts.register ( 'Shift+~', nope ( 'Shift+Tilde' ) );

shortcuts.register ( 'Shift+1', nope ( 'Shift+1' ) );
shortcuts.register ( 'Shift+2', nope ( 'Shift+2' ) );
shortcuts.register ( 'Shift+3', nope ( 'Shift+3' ) );
shortcuts.register ( 'Shift+4', nope ( 'Shift+4' ) );
shortcuts.register ( 'Shift+5', nope ( 'Shift+5' ) );
shortcuts.register ( 'Shift+6', nope ( 'Shift+6' ) );
shortcuts.register ( 'Shift+7', nope ( 'Shift+7' ) );
shortcuts.register ( 'Shift+8', nope ( 'Shift+8' ) );
shortcuts.register ( 'Shift+9', nope ( 'Shift+9' ) );
shortcuts.register ( 'Shift+0', nope ( 'Shift+0' ) );

shortcuts.register ( 'Shift+A', nope ( 'Shift+A' ) );
shortcuts.register ( 'Shift+B', nope ( 'Shift+B' ) );
shortcuts.register ( 'Shift+C', nope ( 'Shift+C' ) );
shortcuts.register ( 'Shift+Z', nope ( 'Shift+Z' ) );
shortcuts.register ( 'Shift+Y', nope ( 'Shift+Y' ) );
shortcuts.register ( 'Shift+X', nope ( 'Shift+X' ) );

shortcuts.register ( 'ClickLeft', nope ( 'ClickLeft' ) );
shortcuts.register ( 'ClickRight', nope ( 'ClickRight' ) );
shortcuts.register ( 'ClickMiddle', nope ( 'ClickMiddle' ) );
shortcuts.register ( 'MouseLeft', nope ( 'MouseLeft' ) );
shortcuts.register ( 'MouseRight', nope ( 'MouseRight' ) );
shortcuts.register ( 'MouseMiddle', nope ( 'MouseMiddle' ) );
shortcuts.register ( 'Mouse0', nope ( 'Mouse0' ) );
shortcuts.register ( 'Mouse1', nope ( 'Mouse1' ) );
shortcuts.register ( 'Mouse2', nope ( 'Mouse2' ) );
shortcuts.register ( 'Mouse3', nope ( 'Mouse3' ) );
shortcuts.register ( 'Mouse4', nope ( 'Mouse4' ) );
shortcuts.register ( 'Mouse5', nope ( 'Mouse5' ) );
shortcuts.register ( 'Mouse6', nope ( 'Mouse6' ) );
shortcuts.register ( 'Mouse7', nope ( 'Mouse7' ) );
shortcuts.register ( 'Mouse8', nope ( 'Mouse8' ) );
shortcuts.register ( 'Mouse9', nope ( 'Mouse9' ) );

shortcuts.register ( 'Alt+F', yep ( 'Alt+F' ) );
shortcuts.register ( 'Cmd+K Cmd+A', yep ( 'Cmd+K Cmd+A' ) );
shortcuts.register ( 'Cmd+K B', yep ( 'Cmd+K B' ) );
shortcuts.register ( 'Cmd+K Alt+C', yep ( 'Cmd+K Alt+C' ) );
shortcuts.register ( 'Shift+ClickLeft', yep ( 'Shift+ClickLeft' ) );
shortcuts.register ( 'Cmd+ClickMiddle', yep ( 'Cmd+ClickMiddle' ) );
shortcuts.register ( 'Alt+ClickLeft Cmd+ClickMiddle', yep ( 'Alt+ClickLeft Cmd+ClickMiddle' ) );

shortcuts.register ( 'CmdLeft+CmdRight', yep ( 'CmdLeft+CmdRight' ) );
// shortcuts.register ( 'CmdLeft+CmdRight AltLeft+AltRight', yep ( 'CmdLeft+CmdRight AltLeft+AltRight' ) ); //TODO It'd be cool to support this too

shortcuts.register ( 'Up Up Down Down Left Right Left Right B A', yep ( 'Up Up Down Down Left Right Left Right B A 🚀' ), { konami: true } );

// shortcuts.register ( 'Left+Up', nope ( 'Left+Up' ) );
// shortcuts.register ( 'Left+Down', nope ( 'Left+Down' ) );
// shortcuts.register ( 'Left+Right', nope ( 'Left+Right' ) );
// shortcuts.register ( 'Up+Down', nope ( 'Up+Down' ) );
// shortcuts.register ( 'Up+Right', nope ( 'Up+Right' ) );
// shortcuts.register ( 'Down+Right', nope ( 'Down+Right' ) );

shortcuts.register ( 'Ctrl+Cmd+Right', yep ( 'Ctrl+Cmd+Right' ) );

shortcuts.register ( '§', yep ( '§' ) );
shortcuts.register ( '±', yep ( '±' ) );
shortcuts.register ( 'Shift+§', nope ( 'Shift+§' ) );
shortcuts.register ( 'Shift+±', nope ( 'Shift+±' ) );

shortcuts.register ( 'Ctrl+Cmd+A', nope ( 'NOT DISPOSED!' ) )();

shortcuts.start ();

// setTimeout ( () => {
  // shosho.stop ();
  // shosho.reset ();
// }, 5000 );

/* MAIN - RECORDING */

shortcuts.register ( 'Ctrl+Cmd+R', () => {

  const dispose = ShoSho.record ( shortcut => {
    console.log ( '---' );
    console.log ( shortcut );
    console.log ( `"${shortcut}"` );
    const trimmed = shortcut.replace ( /(^.*?)((?:Command(?:Left|Right)\+K )*\S+$)/, '$2' );
    console.log ( trimmed );
    const formatted = ShoSho.format ( trimmed, 'long-inflexible-nondirectional' );
    console.log ( formatted );
  });

  setTimeout ( dispose, 5000 );

  return true;

});

/* EXPORT */

globalThis.shosho = shortcuts;
globalThis.S = shortcuts;
