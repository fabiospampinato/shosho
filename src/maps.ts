
/* IMPORT */

import {isMac} from './utils';

/* MODIFIERS */

const AltLeft = 1n << 0n;
const AltRight = 1n << 1n;
const ControlLeft = 1n << 2n;
const ControlRight = 1n << 3n;
const MetaLeft = 1n << 4n;
const MetaRight = 1n << 5n;
const OSLeft = 1n << 4n;
const OSRight = 1n << 5n;
const ShiftLeft = 1n << 6n;
const ShiftRight = 1n << 7n;

/* DIGITS */

const Digit0 = 1n << 9n;
const Digit1 = 1n << 10n;
const Digit2 = 1n << 11n;
const Digit3 = 1n << 12n;
const Digit4 = 1n << 13n;
const Digit5 = 1n << 14n;
const Digit6 = 1n << 15n;
const Digit7 = 1n << 16n;
const Digit8 = 1n << 17n;
const Digit9 = 1n << 18n;

/* ALPHABET */

const KeyA = 1n << 19n;
const KeyB = 1n << 20n;
const KeyC = 1n << 21n;
const KeyD = 1n << 22n;
const KeyE = 1n << 23n;
const KeyF = 1n << 24n;
const KeyG = 1n << 25n;
const KeyH = 1n << 26n;
const KeyI = 1n << 27n;
const KeyJ = 1n << 28n;
const KeyK = 1n << 29n;
const KeyL = 1n << 30n;
const KeyM = 1n << 31n;
const KeyN = 1n << 32n;
const KeyO = 1n << 33n;
const KeyP = 1n << 34n;
const KeyQ = 1n << 35n;
const KeyR = 1n << 36n;
const KeyS = 1n << 37n;
const KeyT = 1n << 38n;
const KeyU = 1n << 39n;
const KeyV = 1n << 40n;
const KeyW = 1n << 41n;
const KeyX = 1n << 42n;
const KeyY = 1n << 43n;
const KeyZ = 1n << 44n;

/* FUNCTION KEYS */

const F1 = 1n << 45n;
const F2 = 1n << 46n;
const F3 = 1n << 47n;
const F4 = 1n << 48n;
const F5 = 1n << 49n;
const F6 = 1n << 50n;
const F7 = 1n << 51n;
const F8 = 1n << 52n;
const F9 = 1n << 53n;
const F10 = 1n << 54n;
const F11 = 1n << 55n;
const F12 = 1n << 56n;
const F13 = 1n << 57n;
const F14 = 1n << 58n;
const F15 = 1n << 59n;
const F16 = 1n << 60n;
const F17 = 1n << 61n;
const F18 = 1n << 62n;
const F19 = 1n << 63n;
const F20 = 1n << 64n;
const F21 = 1n << 65n;
const F22 = 1n << 66n;
const F23 = 1n << 67n;
const F24 = 1n << 68n;

/* NUMPAD DIGITS */

const Numpad0 = 1n << 69n;
const Numpad1 = 1n << 70n;
const Numpad2 = 1n << 71n;
const Numpad3 = 1n << 72n;
const Numpad4 = 1n << 73n;
const Numpad5 = 1n << 74n;
const Numpad6 = 1n << 75n;
const Numpad7 = 1n << 76n;
const Numpad8 = 1n << 77n;
const Numpad9 = 1n << 78n;

/* NUMPAD OPERATORS */

const NumpadAdd = 1n << 79n;
const NumpadComma = 1n << 80n;
const NumpadDecimal = 1n << 81n;
const NumpadDivide = 1n << 82n;
const NumpadEnter = 1n << 83n;
const NumpadEqual = 1n << 84n;
const NumpadMultiply = 1n << 85n;
const NumpadSubtract = 1n << 86n;

/* SPECIAL KEYS */

const ArrowDown = 1n << 87n;
const ArrowLeft = 1n << 88n;
const ArrowRight = 1n << 89n;
const ArrowUp = 1n << 90n;
const Backspace = 1n << 91n;
const CapsLock = 1n << 92n;
const Delete = 1n << 93n;
const End = 1n << 94n;
const Enter = 1n << 95n;
const Escape = 1n << 96n;
const Home = 1n << 97n;
const Insert = 1n << 98n;
const PageDown = 1n << 99n;
const PageUp = 1n << 100n;
const Space = 1n << 101n;
const Tab = 1n << 102n;

/* PUNCTUATION KEYS */

const Backquote = 1n << 103n;
const Backslash = 1n << 104n;
const BracketLeft = 1n << 105n;
const BracketRight = 1n << 106n;
const Comma = 1n << 107n;
const Equal = 1n << 108n;
const IntlBackslash = 1n << 109n;
const Minus = 1n << 110n;
const Period = 1n << 111n;
const Quote = 1n << 112n;
const Semicolon = 1n << 113n;
const Slash = 1n << 114n;

/* OTHER KEYS */

const NumLock = 1n << 115n;
const ScrollLock = 1n << 116n;

/* CUSTOM KEYBOARD KEYS */

const Ampersand = 1n << 117n;
const Asterisk = 1n << 118n;
const At = 1n << 119n;
const BraceLeft = 1n << 120n;
const BraceRight = 1n << 121n;
const Caret = 1n << 122n;
const Colon = 1n << 123n;
const Dollar = 1n << 124n;
const DoubleQuote = 1n << 125n;
const ExclamationMark = 1n << 126n;
const GreaterThan = 1n << 127n;
const Hash = 1n << 128n;
const LessThan = 1n << 129n;
const ParenthesisLeft = 1n << 130n;
const ParenthesisRight = 1n << 131n;
const Percent = 1n << 132n;
const Pipe = 1n << 133n;
const Plus = 1n << 134n;
const QuestionMark = 1n << 135n;
const Tilde = 1n << 136n;
const Underscore = 1n << 137n;

/* CUSTOM MOUSE KEYS */

const Mouse0 = 1n << 138n;
const Mouse1 = 1n << 139n;
const Mouse2 = 1n << 140n;
const Mouse3 = 1n << 141n;
const Mouse4 = 1n << 142n;
const Mouse5 = 1n << 143n;
const Mouse6 = 1n << 144n;
const Mouse7 = 1n << 145n;
const Mouse8 = 1n << 146n;
const Mouse9 = 1n << 147n;

/* UNSUPPORTED KEYS */

const Section = 1n << 148n;
const PlusMinus = 1n << 149n;

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

const KEY_DIGITS2ID = <const> {
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
  '9': Digit9
};

const KEY_ALPHABET2ID = <const> {
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
  'z': KeyZ
};

const KEY_PUNCTUATION2ID = <const> {
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

const KEY_UNSUPPORTED2ID = <const> {
  '§': Section,
  '±': PlusMinus
};

const KEY2ID = <const> {
  ...KEY_DIGITS2ID,
  ...KEY_ALPHABET2ID,
  ...KEY_PUNCTUATION2ID,
  ...KEY_UNSUPPORTED2ID
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
  ...KEY_DIGITS2ID,
  ...KEY_ALPHABET2ID,
  ...KEY_PUNCTUATION2ID,
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

export {CODE2ID, CODE_RISKY2ID, KEY_DIGITS2ID, KEY_ALPHABET2ID, KEY_PUNCTUATION2ID, KEY_UNSUPPORTED2ID, KEY2ID, MOUSE2ID, NAME2ID, WHICH2ID};
