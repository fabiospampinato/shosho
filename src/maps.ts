
/* IMPORT */

import {isMac} from './utils';

/* MODIFIERS */

const AltLeft = 1 << 8;
const AltRight = 1 << 9;
const ControlLeft = 1 << 10;
const ControlRight = 1 << 11;
const MetaLeft = 1 << 12;
const MetaRight = 1 << 13;
const OSLeft = 1 << 12;
const OSRight = 1 << 13;
const ShiftLeft = 1 << 14;
const ShiftRight = 1 << 15;

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
const ExclamationMark = 118;
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
  /* OTHER KEYS */
  NumLock,
  ScrollLock
};

const CODE_RISKY2ID = <const> {
  /* PUNCTUATION */
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
  Slash
};

const KEY2ID = <const> {
  /* DIGITS */
  '0': Digit0,
  '1': Digit1,
  '2': Digit2,
  '3': Digit3,
  '4': Digit4,
  '5': Digit5,
  '6': Digit6,
  '7': Digit7,
  '8': Digit8,
  '9': Digit9,
  /* ALPHABET UPPERCASE */
  'A': KeyA,
  'B': KeyB,
  'C': KeyC,
  'D': KeyD,
  'E': KeyE,
  'F': KeyF,
  'G': KeyG,
  'H': KeyH,
  'I': KeyI,
  'J': KeyJ,
  'K': KeyK,
  'L': KeyL,
  'M': KeyM,
  'N': KeyN,
  'O': KeyO,
  'P': KeyP,
  'Q': KeyQ,
  'R': KeyR,
  'S': KeyS,
  'T': KeyT,
  'U': KeyU,
  'V': KeyV,
  'W': KeyW,
  'X': KeyX,
  'Y': KeyY,
  'Z': KeyZ,
  /* ALPHABET LOWERCASE */
  'a': KeyA,
  'b': KeyB,
  'c': KeyC,
  'd': KeyD,
  'e': KeyE,
  'f': KeyF,
  'g': KeyG,
  'h': KeyH,
  'i': KeyI,
  'j': KeyJ,
  'k': KeyK,
  'l': KeyL,
  'm': KeyM,
  'n': KeyN,
  'o': KeyO,
  'p': KeyP,
  'q': KeyQ,
  'r': KeyR,
  's': KeyS,
  't': KeyT,
  'u': KeyU,
  'v': KeyV,
  'w': KeyW,
  'x': KeyX,
  'y': KeyY,
  'z': KeyZ,
  /* PUNCTUATION KEYS */
  '`': Backquote,
  '\\': Backslash,
  '[': BracketLeft,
  ']': BracketRight,
  ',': Comma,
  '=': Equal,
  '-': Minus,
  '.': Period,
  '\'': Quote,
  ';': Semicolon,
  '/': Slash,
  /* OTHER PUNCTUATION KEYS */
  '&': Ampersand,
  '*': Asterisk,
  '@': At,
  '{': BraceLeft,
  '}': BraceRight,
  '^': Caret,
  ':': Colon,
  '$': Dollar,
  '"': DoubleQuote,
  '!': ExclamationMark,
  '>': GreaterThan,
  '#': Hash,
  '<': LessThan,
  '(': ParenthesisLeft,
  ')': ParenthesisRight,
  '%': Percent,
  '|': Pipe,
  '+': Plus,
  '?': QuestionMark,
  '~': Tilde,
  '_': Underscore
};

const MOUSE2ID = <const> {
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

const NAME2ID = <const> {
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
  /* DIGITS & ALPHABET & PUNCTUATION KEYS */
  plus: Plus,
  ...KEY2ID,
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

const WHICH2ID = <const> {
  /* DIGITS */
  48: Digit0,
  49: Digit1,
  50: Digit2,
  51: Digit3,
  52: Digit4,
  53: Digit5,
  54: Digit6,
  55: Digit7,
  56: Digit8,
  57: Digit9,
  /* ALPHABET UPPERCASE */
  65: KeyA,
  66: KeyB,
  67: KeyC,
  68: KeyD,
  69: KeyE,
  70: KeyF,
  71: KeyG,
  72: KeyH,
  73: KeyI,
  74: KeyJ,
  75: KeyK,
  76: KeyL,
  77: KeyM,
  78: KeyN,
  79: KeyO,
  80: KeyP,
  81: KeyQ,
  82: KeyR,
  83: KeyS,
  84: KeyT,
  85: KeyU,
  86: KeyV,
  87: KeyW,
  88: KeyX,
  89: KeyY,
  90: KeyZ,
  /* ALPHABET LOWERCASE */
  97: KeyA,
  98: KeyB,
  99: KeyC,
  100: KeyD,
  101: KeyE,
  102: KeyF,
  103: KeyG,
  104: KeyH,
  105: KeyI,
  106: KeyJ,
  107: KeyK,
  108: KeyL,
  109: KeyM,
  110: KeyN,
  111: KeyO,
  112: KeyP,
  113: KeyQ,
  114: KeyR,
  115: KeyS,
  116: KeyT,
  117: KeyU,
  118: KeyV,
  119: KeyW,
  120: KeyX,
  121: KeyY,
  122: KeyZ,
  /* PUNCTUATION KEYS */
  96: Backquote,
  92: Backslash,
  91: BracketLeft,
  93: BracketRight,
  44: Comma,
  61: Equal,
  45: Minus,
  46: Period,
  39: Quote,
  59: Semicolon,
  47: Slash,
  /* OTHER PUNCTUATION KEYS */
  38: Ampersand,
  42: Asterisk,
  64: At,
  123: BraceLeft,
  125: BraceRight,
  94: Caret,
  58: Colon,
  36: Dollar,
  34: DoubleQuote,
  33: ExclamationMark,
  62: GreaterThan,
  35: Hash,
  60: LessThan,
  40: ParenthesisLeft,
  41: ParenthesisRight,
  37: Percent,
  124: Pipe,
  43: Plus,
  63: QuestionMark,
  126: Tilde,
  95: Underscore
};

/* EXPORT */

export {CODE2ID, CODE_RISKY2ID, KEY2ID, MOUSE2ID, NAME2ID, WHICH2ID};
