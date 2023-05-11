
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

const enumerate = ( parts: (number | number[])[] ): number[][] => { // Exhaustively listing all possible paths from the start to the end

  if ( !parts.length ) return [];

  const normalized = parts.map ( castArray );
  const heads = normalized[0];
  const tails = enumerate ( normalized.slice ( 1 ) );
  const values: number[][] = [];

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

const escapeRe = (() => {

  const unescapedRe = /[\\^$.*+?()[\]{}|]/g;

  return ( re: string ): string => {

    return re.replace ( unescapedRe, char => `\\${char}` );

  };

})();

const first = <T> ( values: T[] ): T | undefined => {

  return values[0];

};

const isArray = ( value: unknown ): value is unknown[] => {

  return Array.isArray ( value );

};

const isEmpty = ( value: Record<any, unknown> ): boolean => {

  for ( const prop in value ) {

    return false;

  }

  return true;

};

const isMac = (): boolean => {

  if ( typeof navigator !== 'object' ) return false;

  return /mac|ipod|iphone|ipad/i.test ( navigator.platform );

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

const or = ( values: number[] ): number => {

  return values.reduce ( ( acc, value ) => acc | value, 0 );

};

const sum = ( values: number[] ): number => {

  return values.reduce ( ( acc, value ) => acc + value, 0 );

};

/* EXPORT */

export {attempt, castArray, enumerate, escapeRe, first, isArray, isEmpty, isMac, isString, last, nope, or, sum};
