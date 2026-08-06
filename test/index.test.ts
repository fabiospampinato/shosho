/// <reference lib="dom" />

import {test, expect} from 'bun:test';
import ShoSho from '../dist/index.js';

const keys = {
  f: {'key': 'f'},
  g: {'key': 'g'},
  h: {'key': 'h'},
}

function keypress(key){
  document.dispatchEvent(new KeyboardEvent('keydown', keys[key]));
  document.dispatchEvent(new KeyboardEvent('keyup', keys[key]));
}

test ( 'key sequences do not trigger single key shortcuts', async () => {
  let f_pressed = 0;
  let g_pressed = 0;
  let fg_pressed = 0;

  const sho = new ShoSho ();
  sho.register('f', () => { f_pressed++; });
  sho.register('g', () => { g_pressed++; });
  sho.register('f g', () => { fg_pressed++; return true });
  sho.start()

  keypress('f')
  expect(f_pressed).toEqual(1)

  await new Promise(resolve => setTimeout(() => resolve(''), 1000));

  keypress('g')
  expect(g_pressed).toEqual(1)
  expect(fg_pressed).toEqual(0)

  keypress('f')
  keypress('g')
  expect(f_pressed).toEqual(1)
  expect(g_pressed).toEqual(1)
  expect(fg_pressed).toEqual(1)
})

test ( 'key sequences are not triggered by single keys', () => {
  let fg_pressed = 0;
  let fh_pressed = 0;

  const sho = new ShoSho ();

  sho.register('f g', () => { fg_pressed++; return true });
  sho.register('f h', () => { fh_pressed++; return true });
  sho.start()

  keypress('f')
  keypress('g')
  expect(fg_pressed).toEqual(1)
  expect(fh_pressed).toEqual(0)

  keypress('f')
  keypress('h')
  expect(fg_pressed).toEqual(1)
  expect(fh_pressed).toEqual(1)

  keypress('g')
  keypress('h')
  expect(fg_pressed).toEqual(1)
  expect(fh_pressed).toEqual(1)
})
