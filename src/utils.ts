
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

const comparator = <T extends number | bigint> ( a: T, b: T ): -1 | 0 | 1 => {

  if ( a < b ) return -1;

  if ( a > b ) return 1;

  return 0;

};

const decompose = ( value: bigint ): bigint[] => { // Returns all the primitive components of a binary bigint

  const components: bigint[] = [];

  for ( let i = 0n; value > 0n; i += 1n, value >>= 1n ) {

    if ( value & 1n ) {

      components.push ( 1n << i );

    }

  }

  return components;

};

const enumerate = ( parts: (bigint | bigint[])[] ): bigint[][] => { // Exhaustively listing all possible paths from the start to the end

  if ( parts.length === 0 ) {

    return [];

  } else if ( parts.length === 1 ) {

    const part = parts[0];

    if ( isArray ( part ) ) {

      if ( part.length <= 1 ) {

        return [part];

      } else {

        return part.map ( value => [value] );

      }

    } else {

      return [[part]];

    }

  }

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

const isMac = ((): () => boolean => {

  const isMac = ((): boolean => {

    if ( typeof navigator === 'object' ) {

      return /mac|ipod|iphone|ipad/i.test ( navigator.platform );

    }

    if ( typeof globalThis['process'] === 'object' ) {

      return globalThis['process']['platform'] === 'darwin';

    }

    return false;

  })();

  return () => isMac;

})();

const isMouseEvent = ( value: unknown ): value is MouseEvent => {

  return value instanceof MouseEvent;

};

const isString = ( value: unknown ): value is string => {

  return typeof value === 'string';

};

const isUndefined = ( value: unknown ): value is undefined => {

  return value === undefined;

};

const last = <T> ( values: T[] ): T | undefined => {

  return values[values.length - 1];

};

const memoize = <T, R> ( fn: ( arg: T ) => R ): (( arg: T ) => R) => {

  const cache = new Map ();

  return ( arg: T ): R => {

    const resultCached = cache.get ( arg );

    if ( !isUndefined ( resultCached ) || cache.has ( arg ) ) return resultCached;

    const result = fn ( arg );

    cache.set ( arg, result );

    return result;

  };

};

const nope = (): false => {

  return false;

};

const or = ( values: bigint[] ): bigint => {

  return values.reduce ( ( acc, value ) => acc | value, 0n );

};

const orWith = ( values: bigint[], otherValues: bigint[] ): bigint[][] => {

  return otherValues.map ( other => {

    const head = values.slice ( 0, -1 );
    const tail = last ( values ) || 0n;

    return [...head, tail | other];

  });

};

const take = <T> ( arr: T[], nr: number ): T[] => {

  return arr.slice ( 0, Math.max ( 0, nr ) );

};

const takeRight = <T> ( arr: T[], nr: number ): T[] => {

  return arr.slice ( arr.length - Math.max ( 0, nr ), arr.length );

};

const uniq = <T> ( values: T[] ): T[] => {

  if ( values.length <= 1 ) return values;

  return Array.from ( new Set ( values ) );

};

const without = <T> ( values: T[], except: T ): T[] => {

  if ( !values.includes ( except ) ) return values;

  return values.filter ( value => value !== except );

};

const yep = (): true => {

  return true;

};

/* EXPORT */

export {attempt, castArray, comparator, decompose, enumerate, first, isArray, isKeyboardEvent, isMac, isMouseEvent, isString, last, memoize, nope, or, orWith, take, takeRight, uniq, without, yep};
