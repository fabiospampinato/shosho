# ShoSho

A modern and powerful shortcuts management library.

## Features

- It is largely built on top of [`KeyboardEvent#code`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code) and [`KeyboardEvent#key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key), for great compatibility across browsers, platforms, languages and layouts.
- It is _fast_. Almost always this library will do `O(1)` registrations, `O(1)` disposals, `O(1)` lookups and `O(1)` resetting.
- It supports ~100 keyboard keys, including function keys and numpad keys.
- It supports mouse buttons too, which can be mixed in shortcts with keyboard keys, like `Ctrl+ClickLeft`.
- It supports simple shortcuts, like `Ctrl+F`, and shortcuts sequences, like `Ctrl+K Ctrl+F`.
- It supports detecting which exact modifier key was pressed, like `ControlLeft` or `ControlRight`.
- It supports common aliases for keys, like `Alt`/`Option`, or `Esc`/`Escape`.
- It supports some character-based shortcuts, like `Shift+#`, rather than the equivalent key-based shortcut, which might be `Shift+3`.
- It supports automatically using `Command` under macOS and `Control` elsewhere, by writing for example `CommandOrControl+F`.
- It supports multi-trigger shortcuts, like `Up+Right` or `Down+Left`, except when the `Meta` key is pressed, which is buggy in browsers.
- It supports Konami codes, a.k.a. cheatcode shortcuts, like `Up Up Down Down Left Right Left Right B A`.
- It supports formatting shortcuts in 10 different styles, including formatting for [Electron](https://www.electronjs.org) and as symbols for hints/tooltips.
- It supports recording a shortcut, for customizing shortcuts easily.

## Shortcut Syntax

The following keys can be used when defining a shortcut:

- **Modifiers**: <kbd>Alt</kbd>/<kbd>Option</kbd>, <kbd>Cmd</kbd>/<kbd>Command</kbd>/<kbd>Meta</kbd>, <kbd>Ctrl</kbd>/<kbd>Control</kbd>, <kbd>Shift</kbd>, <kbd>CmdOrCtrl</kbd>/<kbd>CommandOrControl</kbd>.
- **Left modifiers**: <kbd>AltLeft</kbd>/<kbd>OptionLeft</kbd>, <kbd>CmdLeft</kbd>/<kbd>CommandLeft</kbd>/<kbd>MetaLeft</kbd>, <kbd>CtrlLeft</kbd>/<kbd>ControLeft</kbd>, <kbd>CmdLeftOrCtrlLeft</kbd>/<kbd>CommandLeftOrControlLeft</kbd>.
- **Right modifiers**: <kbd>AltRight</kbd>/<kbd>OptionRight</kbd>, <kbd>CmdRight</kbd>/<kbd>CommandRight</kbd>/<kbd>MetaRight</kbd>, <kbd>CtrlRight</kbd>/<kbd>ControRight</kbd>, <kbd>CmdRightOrCtrlRight</kbd>/<kbd>CommandRightOrControlRight</kbd>.
- **Digits**: <kbd>0-9</kbd>.
- **Alphabet letters**: <kbd>A-Z</kbd>.
- **Function keys**: <kbd>F1-F24</kbd>.
- **Numpad digits**: <kbd>Numpad0-Numpad9</kbd>.
- **Numpad operators**: <kbd>NumpadAdd</kbd>, <kbd>NumpadComma</kbd>, <kbd>NumpadDecimal</kbd>, <kbd>NumpadDivide</kbd>, <kbd>NumpadEnter</kbd>, <kbd>NumpadEqual</kbd>, <kbd>NumpadMultiply</kbd>, <kbd>NumpadSubtract</kbd>.
- **Special keys**: <kbd>Backspace</kbd>, <kbd>Capslock</kbd>, <kbd>Del</kbd>/<kbd>Delete</kbd>, <kbd>Down</kbd>, <kbd>End</kbd>, <kbd>Enter</kbd>/<kbd>Return</kbd>, <kbd>Esc</kbd>/<kbd>Escape</kbd>, <kbd>Home</kbd>, <kbd>Insert</kbd>, <kbd>Left</kbd>, <kbd>PageDown</kbd>, <kbd>PageUp</kbd>, <kbd>Right</kbd>, <kbd>Space</kbd>/<kbd>Spacebar</kbd>, <kbd>Tab</kbd>, <kbd>Up</kbd>, <kbd>NumLock</kbd>, <kbd>ScrollLock</kbd>.
- **Punctuation keys**: <kbd>!</kbd>, <kbd>@</kbd>, <kbd>#</kbd>, <kbd>$</kbd>, <kbd>%</kbd>, <kbd>^</kbd>, <kbd>&</kbd>, <kbd>*</kbd>, <kbd>(  </kbd>, <kbd>)</kbd>, <kbd>_</kbd>, <kbd>{</kbd>, <kbd>}</kbd>, <kbd>|</kbd>, <kbd>:</kbd>, <kbd>"</kbd>, <kbd><</kbd>, <kbd>></kbd>, <kbd>?</kbd>, <kbd>~</kbd>.
- **Mouse buttons**: <kbd>ClickLeft</kbd>/<kbd>MouseLeft</kbd>, <kbd>ClickMiddle</kbd>/<kbd>MouseMiddle</kbd>, <kbd>ClickRight</kbd>/<kbd>MouseRight</kbd>, <kbd>Mouse0-Mouse9</kbd>.

Please note that:

- ℹ️ Other keys are not supported.
- ℹ️ Shortcuts are case insensitive.
- ℹ️ Keys in a single shortcut must be joined by a plus sign (e.g. <kbd>Ctrl+A</kbd>).
- ℹ️ Sequences of shortcuts must be joined by a space (e.g. <kbd>Ctrl+K Ctrl+B</kbd>).
- ⚠️ Punctuation keys should be avoided when possible, especially when used in combination with Shift/Alt, as they may less to somewhat different results across different layouts.

## Install

```sh
npm install --save shosho
```

## Usage

```ts
import ShoSho from 'shosho';

// Let's create a shortcuts manager

const shortcuts = new ShoSho ({
  capture: true,
  target: document,
  shouldHandleEvent ( event ) {
    // Return "true" if this event should be handled
    return true;
  }
});

// Let's register some shortcuts. Shortcuts handlers must return "true" if they actually handled the shortcut

shortcuts.register ( 'A', event => { // Single-key shortcut
  console.log ( 'Handling A' );
  return true;
});

shortcuts.register ( 'Ctrl+F', event => { // Simple modifier+trigger shortcut
  console.log ( 'Handling Ctrl+F' );
  return true;
});

shortcuts.register ( 'Ctrl+K Ctrl+F', event => { // Advanced sequence shortcut
  console.log ( 'Handling Ctrl+K Ctrl+F' );
  return true;
});

shortcuts.register ( 'ClickMiddle', event => { // Single-mouse-button shortcut
  console.log ( 'Skipping ClickMiddle actually' );
  return false; // Returning "false" tells the library to try other potential handlers for this shortcut
});

shortcuts.register ( 'CmdOrCtrl+ClickRight', event => { // Advanced mixed keyboard/mouse shortcut
  console.log ( 'Handling CmdOrCtrl+ClickRight' );
  return true;
});

// Let's register a Konami code, which basically is not affected by other registered shortcuts

shortcuts.register ( 'Up Up Down Down Left Right Left Right B A', event => { // A Konami code
  console.log ( 'Secret shortcut triggered 🚀' );
}, { konami: true } ); // Registering it as a Konami code

// Let's register a shortcut but then dispose of it

const dispose = shortcuts.register ( 'Shift+1', event => {
  console.log ( 'Handling Shift+1' );
  return true;
});

dispose (); // Unregistering that shortcut with that handler

// Let's trigger a shortcut programmatically, perhaps for debugging purposes

const handled = shortcuts.trigger ( 'Ctrl+F' );

console.log ( handled ); // => true

// Let's actually start listening for shortcuts

shortcuts.start ();

// Let's stop listening for shortcuts

shortcuts.stop ();

// Let's dispose of all registered shortcuts

shortcuts.reset ();

// Let's format a shortcut, with every supported format

ShoSho.format ( 'ControlLeft+A', 'electron' ); // => 'Ctrl+A'
ShoSho.format ( 'ControlLeft+A', 'symbols' ); // => '⌃A'
ShoSho.format ( 'ControlLeft+A', 'long-flexible-directional' ); // => 'CommandOrControlLeft+A'
ShoSho.format ( 'ControlLeft+A', 'long-flexible-nondirectional' ); // => 'CommandOrControl+A'
ShoSho.format ( 'ControlLeft+A', 'long-inflexible-directional' ); // => 'ControlLeft+A'
ShoSho.format ( 'ControlLeft+A', 'long-inflexible-nondirectional' ); // => 'Control+A'
ShoSho.format ( 'ControlLeft+A', 'short-flexible-directional' ); // => 'CmdOrCtrlLeft+A'
ShoSho.format ( 'ControlLeft+A', 'short-flexible-nondirectional' ); // => 'CmdOrCtrl+A'
ShoSho.format ( 'ControlLeft+A', 'short-inflexible-directional' ); // => 'CtrlLeft+A'
ShoSho.format ( 'ControlLeft+A', 'short-inflexible-nondirectional' ); // => 'Ctrl+A'

// Let's record a shortcut, which will require manual trimming and formatting

const dispose = ShoSho.record ( shortcut => {

  console.log ( shortcut ); // => It could be 'A', 'CtrlLeft+A', 'CtrlLeft+A CtrlRight', 'CtrlLeft+A CtrlRight+B' and so on...

  const trimmed = shortcut.replace ( /(^.*?)((?:Control(?:Left|Right)\+K )*\S+$)/, '$2' ); // Allowing only 'ControlLeft+K' and 'ControlRight+K' to not be the last shortcut in the sequence
  const formatted = ShoSho.format ( trimmed, 'long-inflexible-nondirectional' ); // Ensuring the final shortcut is formatted exactly how we want it

  console.log ( formatted ); // => It could be 'K', 'CtrlLeft+K', 'CtrlLeft+K CtrlRight', 'Ctrlleft+K CtrlRight+A' and so on...

});

// Let's stop recording

dispose ();
```

## License

MIT © Fabio Spampinato
