
/* IMPORT */

import {isMac} from './utils';

/* MODIFIERS */

const AltLeft = 1 << 8;
const AltRight = 2 << 8;
const ControlLeft = 3 << 8;
const ControlRight = 4 << 8;
const MetaLeft = 5 << 8;
const MetaRight = 6 << 8;
const OSLeft = 5 << 8;
const OSRight = 6 << 8;
const ShiftLeft = 7 << 8;
const ShiftRight = 8 << 8;

/* DIGITS */

const Digit0 = 1;
const Digit1 = 2;
const Digit2 = 3;
const Digit3 = 4;
const Digit4 = 5;
const Digit5 = 6;
const Digit6 = 7;
const Digit7 = 8;
const Digit8 = 9;
const Digit9 = 10;

/* ALPHABET */

const KeyA = 11;
const KeyB = 12;
const KeyC = 13;
const KeyD = 14;
const KeyE = 15;
const KeyF = 16;
const KeyG = 17;
const KeyH = 18;
const KeyI = 19;
const KeyJ = 20;
const KeyK = 21;
const KeyL = 22;
const KeyM = 23;
const KeyN = 24;
const KeyO = 25;
const KeyP = 26;
const KeyQ = 27;
const KeyR = 28;
const KeyS = 29;
const KeyT = 30;
const KeyU = 31;
const KeyV = 32;
const KeyW = 33;
const KeyX = 34;
const KeyY = 35;
const KeyZ = 36;

/* FUNCTION KEYS */

const F1 = 37;
const F2 = 38;
const F3 = 39;
const F4 = 40;
const F5 = 41;
const F6 = 42;
const F7 = 43;
const F8 = 44;
const F9 = 45;
const F10 = 46;
const F11 = 47;
const F12 = 48;
const F13 = 49;
const F14 = 50;
const F15 = 51;
const F16 = 52;
const F17 = 53;
const F18 = 54;
const F19 = 55;
const F20 = 56;
const F21 = 57;
const F22 = 58;
const F23 = 59;
const F24 = 60;

/* NUMPAD DIGITS */

const Numpad0 = 61;
const Numpad1 = 62;
const Numpad2 = 63;
const Numpad3 = 64;
const Numpad4 = 65;
const Numpad5 = 66;
const Numpad6 = 67;
const Numpad7 = 68;
const Numpad8 = 69;
const Numpad9 = 70;

/* NUMPAD OPERATORS */

const NumpadAdd = 71;
const NumpadComma = 72;
const NumpadDecimal = 73;
const NumpadDivide = 74;
const NumpadEnter = 75;
const NumpadEqual = 76;
const NumpadMultiply = 77;
const NumpadSubtract = 78;

/* SPECIAL KEYS */

const ArrowDown = 79;
const ArrowLeft = 80;
const ArrowRight = 81;
const ArrowUp = 82;
const Backspace = 83;
const CapsLock = 84;
const Delete = 85;
const End = 86;
const Enter = 87;
const Escape = 88;
const Home = 89;
const Insert = 90;
const PageDown = 91;
const PageUp = 92;
const Space = 93;
const Tab = 94;

/* PUNCTUATION KEYS */

const Backquote = 95;
const Backslash = 96;
const BracketLeft = 97;
const BracketRight = 98;
const Comma = 99;
const Equal = 100;
const IntlBackslash = 101;
const Minus = 102;
const Period = 103;
const Quote = 104;
const Semicolon = 105;
const Slash = 106;

/* OTHER KEYS */

const NumLock = 107;
const ScrollLock = 108;

/* CUSTOM KEYBOARD KEYS */

const Ampersand = 109;
const Asterisk = 110;
const At = 111;
const BraceLeft = 112;
const BraceRight = 113;
const Caret = 114;
const Colon = 115;
const Dollar = 116;
const DoubleQuote = 117;
const ExclationMark = 118;
const GreaterThan = 119;
const Hash = 120;
const LessThan = 121;
const ParenthesisLeft = 122;
const ParenthesisRight = 123;
const Percent = 124;
const Pipe = 125;
const Plus = 126;
const QuestionMark = 127;
const Tilde = 128;
const Underscore = 129;

/* CUSTOM MOUSE KEYS */

const Mouse0 = 130;
const Mouse1 = 131;
const Mouse2 = 132;
const Mouse3 = 133;
const Mouse4 = 134;
const Mouse5 = 135;
const Mouse6 = 136;
const Mouse7 = 137;
const Mouse8 = 138;
const Mouse9 = 139;

/* MAIN */

const CHAR2ID = <const> {
  /* PUNCTUATION */
  '!': ExclationMark,
  '"': DoubleQuote,
  '#': Hash,
  '$': Dollar,
  '%': Percent,
  '&': Ampersand,
  '\'': Quote,
  '(': ParenthesisLeft,
  ')': ParenthesisRight,
  '*': Asterisk,
  '+': Plus,
  ',': Comma,
  '-': Minus,
  '.': Period,
  '/': Slash,
  ':': Colon,
  ';': Semicolon,
  '<': LessThan,
  '=': Equal,
  '>': GreaterThan,
  '?': QuestionMark,
  '@': At,
  '[': BracketLeft,
  '\\': Backslash,
  ']': BracketRight,
  '^': Caret,
  '_': Underscore,
  '`': Backquote,
  '{': BraceLeft,
  '|': Pipe,
  '}': BraceRight,
  '~': Tilde
};

const CODE2ID = <const> {
  /* MODIFIERS */
  AltLeft,
  AltRight,
  ControlLeft,
  ControlRight,
  MetaLeft,
  MetaRight,
  OSLeft,
  OSRight,
  ShiftLeft,
  ShiftRight,
  /* DIGITS */
  Digit0,
  Digit1,
  Digit2,
  Digit3,
  Digit4,
  Digit5,
  Digit6,
  Digit7,
  Digit8,
  Digit9,
  /* ALPHABET */
  KeyA,
  KeyB,
  KeyC,
  KeyD,
  KeyE,
  KeyF,
  KeyG,
  KeyH,
  KeyI,
  KeyJ,
  KeyK,
  KeyL,
  KeyM,
  KeyN,
  KeyO,
  KeyP,
  KeyQ,
  KeyR,
  KeyS,
  KeyT,
  KeyU,
  KeyV,
  KeyW,
  KeyX,
  KeyY,
  KeyZ,
  /* FUNCTION KEYS */
  F1,
  F2,
  F3,
  F4,
  F5,
  F6,
  F7,
  F8,
  F9,
  F10,
  F11,
  F12,
  F13,
  F14,
  F15,
  F16,
  F17,
  F18,
  F19,
  F20,
  F21,
  F22,
  F23,
  F24,
  /* NUMPAD DIGITS */
  Numpad0,
  Numpad1,
  Numpad2,
  Numpad3,
  Numpad4,
  Numpad5,
  Numpad6,
  Numpad7,
  Numpad8,
  Numpad9,
  /* NUMPAD OPERATORS */
  NumpadAdd,
  NumpadComma,
  NumpadDecimal,
  NumpadDivide,
  NumpadEnter,
  NumpadEqual,
  NumpadMultiply,
  NumpadSubtract,
  /* SPECIAL KEYS */
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Backspace,
  CapsLock,
  Delete,
  End,
  Enter,
  Escape,
  Home,
  Insert,
  PageDown,
  PageUp,
  Space,
  Tab,
  /* PUNCTUATION KEYS */
  Backquote,
  Backslash,
  BracketLeft,
  BracketRight,
  Comma,
  Equal,
  IntlBackslash,
  Minus,
  Period,
  Quote,
  Semicolon,
  Slash,
  /* OTHER KEYS */
  NumLock,
  ScrollLock,
  /* CUSTOM KEYBOARD KEYS */
  Ampersand,
  Asterisk,
  At,
  BraceLeft,
  BraceRight,
  Caret,
  Colon,
  Dollar,
  DoubleQuote,
  ExclationMark,
  GreaterThan,
  Hash,
  LessThan,
  ParenthesisLeft,
  ParenthesisRight,
  Percent,
  Pipe,
  Plus,
  QuestionMark,
  Tilde,
  Underscore,
  /* CUSTOM MOUSE KEYS */
  Mouse0,
  Mouse1,
  Mouse2,
  Mouse3,
  Mouse4,
  Mouse5,
  Mouse6,
  Mouse7,
  Mouse8,
  Mouse9
};

const KEY2ID = <const> {
  /* MODIFIERS */
  altleft: AltLeft,
  altright: AltRight,
  alt: [AltLeft, AltRight],
  optionleft: AltLeft,
  optionright: AltRight,
  option: [AltLeft, AltRight],
  cmdleft: MetaLeft,
  cmdright: MetaRight,
  cmd: [MetaLeft, MetaRight],
  commandleft: MetaLeft,
  commandright: MetaRight,
  command: [MetaLeft, MetaRight],
  metaleft: MetaLeft,
  metaright: MetaRight,
  meta: [MetaLeft, MetaRight],
  ctrlleft: ControlLeft,
  ctrlright: ControlRight,
  ctrl: [ControlLeft, ControlRight],
  controlleft: ControlLeft,
  controlright: ControlRight,
  control: [ControlLeft, ControlRight],
  shiftleft: ShiftLeft,
  shiftright: ShiftRight,
  shift: [ShiftLeft, ShiftRight],
  cmdleftorctrlleft: isMac () ? MetaLeft : ControlLeft,
  cmdrightorctrlright: isMac () ? MetaRight : ControlRight,
  cmdorctrl: isMac () ? [MetaLeft, MetaRight] : [ControlLeft, ControlRight],
  commandleftorcontrolleft: isMac () ? MetaLeft : ControlLeft,
  commandrightorcontrolright: isMac () ? MetaRight : ControlRight,
  commandorcontrol: isMac () ? [MetaLeft, MetaRight] : [ControlLeft, ControlRight],
  /* MOUSE */
  clickleft: Mouse0,
  clickmiddle: Mouse1,
  clickright: Mouse2,
  mouseleft: Mouse0,
  mousemiddle: Mouse1,
  mouseright: Mouse2,
  mouse0: Mouse0,
  mouse1: Mouse1,
  mouse2: Mouse2,
  mouse3: Mouse3,
  mouse4: Mouse4,
  mouse5: Mouse5,
  mouse6: Mouse6,
  mouse7: Mouse7,
  mouse8: Mouse8,
  mouse9: Mouse9,
  /* SPECIAL CHARACTERS */
  backspace: Backspace,
  capslock: CapsLock,
  del: Delete,
  delete: Delete,
  down: ArrowDown,
  end: End,
  enter: Enter,
  return: Enter,
  esc: Escape,
  escape: Escape,
  home: Home,
  insert: Insert,
  left: ArrowLeft,
  pagedown: PageDown,
  pageup: PageUp,
  right: ArrowRight,
  space: Space,
  spacebar: Space,
  tab: Tab,
  up: ArrowUp,
  /* DIGITS */
  0: Digit0,
  1: Digit1,
  2: Digit2,
  3: Digit3,
  4: Digit4,
  5: Digit5,
  6: Digit6,
  7: Digit7,
  8: Digit8,
  9: Digit9,
  /* ALPHABET */
  a: KeyA,
  b: KeyB,
  c: KeyC,
  d: KeyD,
  e: KeyE,
  f: KeyF,
  g: KeyG,
  h: KeyH,
  i: KeyI,
  j: KeyJ,
  k: KeyK,
  l: KeyL,
  m: KeyM,
  n: KeyN,
  o: KeyO,
  p: KeyP,
  q: KeyQ,
  r: KeyR,
  s: KeyS,
  t: KeyT,
  u: KeyU,
  v: KeyV,
  w: KeyW,
  x: KeyX,
  y: KeyY,
  z: KeyZ,
  /* PUNCTUATION */
  ...CHAR2ID,
  plus: Plus,
  /* FUNCTION KEYS */
  f1: F1,
  f2: F2,
  f3: F3,
  f4: F4,
  f5: F5,
  f6: F6,
  f7: F7,
  f8: F8,
  f9: F9,
  f10: F10,
  f11: F11,
  f12: F12,
  f13: F13,
  f14: F14,
  f15: F15,
  f16: F16,
  f17: F17,
  f18: F18,
  f19: F19,
  f20: F20,
  f21: F21,
  f22: F22,
  f23: F23,
  f24: F24,
  /* NUMPAD DIGITS */
  numpad0: Numpad0,
  numpad1: Numpad1,
  numpad2: Numpad2,
  numpad3: Numpad3,
  numpad4: Numpad4,
  numpad5: Numpad5,
  numpad6: Numpad6,
  numpad7: Numpad7,
  numpad8: Numpad8,
  numpad9: Numpad9,
  /* NUMPAD OPERATORS */
  numpadadd: NumpadAdd,
  numpadcomma: NumpadComma,
  numpaddecimal: NumpadDecimal,
  numpaddivide: NumpadDivide,
  numpadenter: NumpadEnter,
  numpadequal: NumpadEqual,
  numpadmultiply: NumpadMultiply,
  numpadsubtract: NumpadSubtract,
  /* OTHERS */
  numlock: NumLock,
  scrolllock: ScrollLock
};

const MOUSE2ID = {
  0: Mouse0,
  1: Mouse1,
  2: Mouse2,
  3: Mouse3,
  4: Mouse4,
  5: Mouse5,
  6: Mouse6,
  7: Mouse7,
  8: Mouse8,
  9: Mouse9
};

/* EXPORT */

export {CHAR2ID, CODE2ID, KEY2ID, MOUSE2ID};
