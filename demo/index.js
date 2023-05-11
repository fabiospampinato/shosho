
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

/* MAIN */

const shosho = new ShoSho ();

shosho.register ( '0', yep ( '0' ) );
shosho.register ( '1', yep ( '1' ) );
shosho.register ( '2', yep ( '2' ) );
shosho.register ( '3', yep ( '3' ) );
shosho.register ( '4', yep ( '4' ) );
shosho.register ( '5', yep ( '5' ) );
shosho.register ( '6', yep ( '6' ) );
shosho.register ( '7', yep ( '7' ) );
shosho.register ( '8', yep ( '8' ) );
shosho.register ( '9', yep ( '9' ) );

shosho.register ( 'A', yep ( 'A' ) );
shosho.register ( 'B', yep ( 'B' ) );
shosho.register ( 'C', yep ( 'C' ) );
shosho.register ( 'D', yep ( 'D' ) );
shosho.register ( 'E', yep ( 'E' ) );
shosho.register ( 'F', yep ( 'F' ) );
shosho.register ( 'G', yep ( 'G' ) );
shosho.register ( 'H', yep ( 'H' ) );
shosho.register ( 'I', yep ( 'I' ) );
shosho.register ( 'J', yep ( 'J' ) );
shosho.register ( 'K', yep ( 'K' ) );
shosho.register ( 'L', yep ( 'L' ) );
shosho.register ( 'M', yep ( 'M' ) );
shosho.register ( 'N', yep ( 'N' ) );
shosho.register ( 'O', yep ( 'O' ) );
shosho.register ( 'P', yep ( 'P' ) );
shosho.register ( 'Q', yep ( 'Q' ) );
shosho.register ( 'R', yep ( 'R' ) );
shosho.register ( 'S', yep ( 'S' ) );
shosho.register ( 'T', yep ( 'T' ) );
shosho.register ( 'U', yep ( 'U' ) );
shosho.register ( 'V', yep ( 'V' ) );
shosho.register ( 'W', yep ( 'W' ) );
shosho.register ( 'X', yep ( 'X' ) );
shosho.register ( 'Y', yep ( 'Y' ) );
shosho.register ( 'Z', yep ( 'Z' ) );

shosho.register ( 'F1', yep ( 'F1' ) );
shosho.register ( 'F2', yep ( 'F2' ) );
shosho.register ( 'F3', yep ( 'F3' ) );
shosho.register ( 'F4', yep ( 'F4' ) );
shosho.register ( 'F5', yep ( 'F5' ) );
shosho.register ( 'F6', yep ( 'F6' ) );
shosho.register ( 'F7', yep ( 'F7' ) );
shosho.register ( 'F8', yep ( 'F8' ) );
shosho.register ( 'F9', yep ( 'F9' ) );
shosho.register ( 'F10', yep ( 'F10' ) );
shosho.register ( 'F11', yep ( 'F11' ) );
shosho.register ( 'F12', yep ( 'F12' ) );
shosho.register ( 'F13', yep ( 'F13' ) );
shosho.register ( 'F14', yep ( 'F14' ) );
shosho.register ( 'F15', yep ( 'F15' ) );
shosho.register ( 'F16', yep ( 'F16' ) );
shosho.register ( 'F17', yep ( 'F17' ) );
shosho.register ( 'F18', yep ( 'F18' ) );
shosho.register ( 'F19', yep ( 'F19' ) );
shosho.register ( 'F20', yep ( 'F20' ) );
shosho.register ( 'F21', yep ( 'F21' ) );
shosho.register ( 'F22', yep ( 'F22' ) );
shosho.register ( 'F23', yep ( 'F23' ) );
shosho.register ( 'F24', yep ( 'F24' ) );

shosho.register ( 'Numpad0', yep ( 'Numpad0' ) );
shosho.register ( 'Numpad1', yep ( 'Numpad1' ) );
shosho.register ( 'Numpad2', yep ( 'Numpad2' ) );
shosho.register ( 'Numpad3', yep ( 'Numpad3' ) );
shosho.register ( 'Numpad4', yep ( 'Numpad4' ) );
shosho.register ( 'Numpad5', yep ( 'Numpad5' ) );
shosho.register ( 'Numpad6', yep ( 'Numpad6' ) );
shosho.register ( 'Numpad7', yep ( 'Numpad7' ) );
shosho.register ( 'Numpad8', yep ( 'Numpad8' ) );
shosho.register ( 'Numpad9', yep ( 'Numpad9' ) );

shosho.register ( 'NumpadAdd', yep ( 'NumpadAdd' ) );
shosho.register ( 'NumpadComma', yep ( 'NumpadComma' ) );
shosho.register ( 'NumpadDecimal', yep ( 'NumpadDecimal' ) );
shosho.register ( 'NumpadDivide', yep ( 'NumpadDivide' ) );
shosho.register ( 'NumpadEnter', yep ( 'NumpadEnter' ) );
shosho.register ( 'NumpadEqual', yep ( 'NumpadEqual' ) );
shosho.register ( 'NumpadMultiply', yep ( 'NumpadMultiply' ) );
shosho.register ( 'NumpadSubtract', yep ( 'NumpadSubtract' ) );

shosho.register ( 'Down', yep ( 'ArrowDown' ) );
shosho.register ( 'Left', yep ( 'ArrowLeft' ) );
shosho.register ( 'Right', yep ( 'ArrowRight' ) );
shosho.register ( 'Up', yep ( 'ArrowUp' ) );

shosho.register ( 'Backspace', yep ( 'Backspace' ) );
shosho.register ( 'CapsLock', yep ( 'CapsLock' ) );
shosho.register ( 'Delete', yep ( 'Delete' ) );
shosho.register ( 'End', yep ( 'End' ) );
shosho.register ( 'Enter', yep ( 'Enter' ) );
shosho.register ( 'Escape', yep ( 'Escape' ) );
shosho.register ( 'Home', yep ( 'Home' ) );
shosho.register ( 'Insert', yep ( 'Insert' ) );
shosho.register ( 'PageDown', yep ( 'PageDown' ) );
shosho.register ( 'PageUp', yep ( 'PageUp' ) );
shosho.register ( 'Space', yep ( 'Space' ) );
shosho.register ( 'Tab', yep ( 'Tab' ) );

shosho.register ( 'NumLock', yep ( 'NumLock' ) );
shosho.register ( 'ScrollLock', yep ( 'ScrollLock' ) );

// shosho.register ( 'AltLeft', nope ( 'AltLeft' ) );
// shosho.register ( 'AltRight', nope ( 'AltRight' ) );
// shosho.register ( 'Alt', nope ( 'Alt' ) );
// shosho.register ( 'OptionLeft', nope ( 'OptionLeft' ) );
// shosho.register ( 'OptionRight', nope ( 'OptionRight' ) );
// shosho.register ( 'Option', nope ( 'Option' ) );
// shosho.register ( 'CmdLeft', nope ( 'CmdLeft' ) );
// shosho.register ( 'CmdRight', nope ( 'CmdRight' ) );
// shosho.register ( 'Cmd', nope ( 'Cmd' ) );
// shosho.register ( 'CommandLeft', nope ( 'CommandLeft' ) );
// shosho.register ( 'CommandRight', nope ( 'CommandRight' ) );
// shosho.register ( 'Command', nope ( 'Command' ) );
// shosho.register ( 'MetaLeft', nope ( 'MetaLeft' ) );
// shosho.register ( 'MetaRight', nope ( 'MetaRight' ) );
// shosho.register ( 'Meta', nope ( 'Meta' ) );
// shosho.register ( 'CtrlLeft', nope ( 'CtrlLeft' ) );
// shosho.register ( 'CtrlRight', nope ( 'CtrlRight' ) );
// shosho.register ( 'Ctrl', nope ( 'Ctrl' ) );
// shosho.register ( 'ControlLeft', nope ( 'ControlLeft' ) );
// shosho.register ( 'ControlRight', nope ( 'ControlRight' ) );
// shosho.register ( 'Control', nope ( 'Control' ) );
// shosho.register ( 'ShiftLeft', nope ( 'ShiftLeft' ) );
// shosho.register ( 'ShiftRight', nope ( 'ShiftRight' ) );
// shosho.register ( 'Shift', nope ( 'Shift' ) );
// shosho.register ( 'CmdLeftOrCtrlLeft', nope ( 'CmdLeftOrCtrlLeft' ) );
// shosho.register ( 'CmdRightOrCtrlRight', nope ( 'CmdRightOrCtrlRight' ) );
// shosho.register ( 'CmdOrCtrl', nope ( 'CmdOrCtrl' ) );
// shosho.register ( 'CommandLeftOrControlLeft', nope ( 'CommandLeftOrControlLeft' ) );
// shosho.register ( 'CommandRightOrControlRight', nope ( 'CommandRightOrControlRight' ) );
// shosho.register ( 'CommandOrControl', nope ( 'CommandOrControl' ) );

shosho.register ( 'Shift+Plus', nope ( 'Shift+Plus' ) );
shosho.register ( 'Shift+!', nope ( 'Shift+ExclationMark' ) );
shosho.register ( 'Shift+"', nope ( 'Shift+DoubleQuote' ) );
shosho.register ( 'Shift+#', nope ( 'Shift+Hash' ) );
shosho.register ( 'Shift+$', nope ( 'Shift+Dollar' ) );
shosho.register ( 'Shift+%', nope ( 'Shift+Percent' ) );
shosho.register ( 'Shift+&', nope ( 'Shift+Ampersand' ) );
shosho.register ( 'Shift+\'', nope ( 'Shift+Quote' ) );
shosho.register ( 'Shift+(', nope ( 'Shift+ParenthesisLeft' ) );
shosho.register ( 'Shift+)', nope ( 'Shift+ParenthesisRight' ) );
shosho.register ( 'Shift+*', nope ( 'Shift+Asterisk' ) );
shosho.register ( 'Shift++', nope ( 'Shift+Plus' ) );
shosho.register ( 'Shift+,', nope ( 'Shift+Comma' ) );
shosho.register ( 'Shift+-', nope ( 'Shift+Minus' ) );
shosho.register ( 'Shift+.', nope ( 'Shift+Period' ) );
shosho.register ( 'Shift+/', nope ( 'Shift+Slash' ) );
shosho.register ( 'Shift+:', nope ( 'Shift+Colon' ) );
shosho.register ( 'Shift+;', nope ( 'Shift+Semicolon' ) );
shosho.register ( 'Shift+<', nope ( 'Shift+LessThan' ) );
shosho.register ( 'Shift+=', nope ( 'Shift+Equal' ) );
shosho.register ( 'Shift+>', nope ( 'Shift+GreaterThan' ) );
shosho.register ( 'Shift+?', nope ( 'Shift+QuestionMark' ) );
shosho.register ( 'Shift+@', nope ( 'Shift+At' ) );
shosho.register ( 'Shift+[', nope ( 'Shift+BracketLeft' ) );
shosho.register ( 'Shift+\\', nope ( 'Shift+Backslash' ) );
shosho.register ( 'Shift+]', nope ( 'Shift+BracketRight' ) );
shosho.register ( 'Shift+^', nope ( 'Shift+Caret' ) );
shosho.register ( 'Shift+_', nope ( 'Shift+Underscore' ) );
shosho.register ( 'Shift+`', nope ( 'Shift+Backquote' ) );
shosho.register ( 'Shift+{', nope ( 'Shift+BraceLeft' ) );
shosho.register ( 'Shift+|', nope ( 'Shift+Pipe' ) );
shosho.register ( 'Shift+}', nope ( 'Shift+BraceRight' ) );
shosho.register ( 'Shift+~', nope ( 'Shift+Tilde' ) );

shosho.register ( 'ClickLeft', nope ( 'ClickLeft' ) );
shosho.register ( 'ClickRight', nope ( 'ClickRight' ) );
shosho.register ( 'ClickMiddle', nope ( 'ClickMiddle' ) );
shosho.register ( 'MouseLeft', nope ( 'MouseLeft' ) );
shosho.register ( 'MouseRight', nope ( 'MouseRight' ) );
shosho.register ( 'MouseMiddle', nope ( 'MouseMiddle' ) );
shosho.register ( 'Mouse0', nope ( 'Mouse0' ) );
shosho.register ( 'Mouse1', nope ( 'Mouse1' ) );
shosho.register ( 'Mouse2', nope ( 'Mouse2' ) );
shosho.register ( 'Mouse3', nope ( 'Mouse3' ) );
shosho.register ( 'Mouse4', nope ( 'Mouse4' ) );
shosho.register ( 'Mouse5', nope ( 'Mouse5' ) );
shosho.register ( 'Mouse6', nope ( 'Mouse6' ) );
shosho.register ( 'Mouse7', nope ( 'Mouse7' ) );
shosho.register ( 'Mouse8', nope ( 'Mouse8' ) );
shosho.register ( 'Mouse9', nope ( 'Mouse9' ) );

shosho.register ( 'Shift+1', yep ( 'Shift+1' ) );
shosho.register ( 'Cmd+K Cmd+A', yep ( 'Cmd+K Cmd+A' ) );
shosho.register ( 'Cmd+K B', yep ( 'Cmd+K B' ) );
shosho.register ( 'Cmd+K Alt+C', yep ( 'Cmd+K Alt+C' ) );
shosho.register ( 'Shift+ClickLeft' , yep ( 'Shift+ClickLeft' ) );
shosho.register ( 'Cmd+ClickMiddle' , yep ( 'Cmd+ClickMiddle' ) );
shosho.register ( 'Alt+ClickLeft Cmd+ClickMiddle' , yep ( 'Alt+ClickLeft Cmd+ClickMiddle' ) );

shosho.start ();

// setTimeout ( () => {
  // shosho.stop ();
  // shosho.reset ();
// }, 5000 );

/* EXPORT */

globalThis.shosho = shosho;
globalThis.S = shosho;
