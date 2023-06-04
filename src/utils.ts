
/* MAIN */

const attempt = <T> ( fn: () => T, fallback: T ): T => {

  try {

    return fn ();

  } catch {

    return fallback;

  }

};

const castArray = <T> ( value: T | T[] ): T[] => {

  return isArray ( value ) ? value : [value];

};

const enumerate = ( parts: (bigint | bigint[])[] ): bigint[][] => { // Exhaustively listing all possible paths from the start to the end

  if ( !parts.length ) return [];

  const normalized = parts.map ( castArray );
  const heads = normalized[0];
  const tails = enumerate ( normalized.slice ( 1 ) );
  const values: bigint[][] = [];

  for ( const head of heads ) {

    if ( tails.length ) {

      for ( const tail of tails ) {

        values.push ([ head, ...tail ]);

      }

    } else {

      values.push ([ head ]);

    }

  }

  return values;

};

const first = <T> ( values: T[] ): T | undefined => {

  return values[0];

};

const isArray = ( value: unknown ): value is unknown[] => {

  return Array.isArray ( value );

};

const isKeyboardEvent = ( value: unknown ): value is KeyboardEvent => {

  return value instanceof KeyboardEvent;

};

const isMac = (): boolean => {

  if ( typeof navigator !== 'object' ) return false;

  return /mac|ipod|iphone|ipad/i.test ( navigator.platform );

};

const isMouseEvent = ( value: unknown ): value is MouseEvent => {

  return value instanceof MouseEvent;

};

const isString = ( value: unknown ): value is string => {

  return typeof value === 'string';

};

const last = <T> ( values: T[] ): T | undefined => {

  return values[values.length - 1];

};

const nope = (): false => {

  return false;

};

const or = ( values: bigint[] ): bigint => {

  return values.reduce ( ( acc, value ) => acc | value, 0n );

};

const uniq = <T> ( values: T[] ): T[] => {

  return Array.from ( new Set ( values ) );

};

const without = <T> ( values: T[], except: T ): T[] => {

  return values.filter ( value => value !== except );

};

const yep = (): true => {

  return true;

};

/* EXPORT */

export {attempt, castArray, enumerate, first, isArray, isKeyboardEvent, isMac, isMouseEvent, isString, last, nope, or, uniq, without, yep};
