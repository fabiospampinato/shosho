
/* MAIN */

const DEFAULT_FORMAT_FORMAT = 'long-inflexible-nondirectional';
const DEFAULT_RECORD_FORMAT = 'long-inflexible-directional';

const MODIFIER_BITMASK = ( 1n << 15n ) - 1n; // Bitmask that includes all modifier keys and none of the triggers
const TRIGGER_BITMASK = ( ( 1n << 160n ) - 1n ) ^ MODIFIER_BITMASK; // Bitmask that includes all trigger keys and none of the modifiers
const UNSUPPORTED = TRIGGER_BITMASK;

const PLUS_JOINER_RE = /(\S)\+/g;
const WHITESPACE_JOINER_RE = /(\S)\s/g;
const PLUSES_RE = /\+{2,}/gi;
const WHITESPACE_RE = /\s+/gi;

/* EXPORT */

export {DEFAULT_FORMAT_FORMAT, DEFAULT_RECORD_FORMAT};
export {MODIFIER_BITMASK, TRIGGER_BITMASK, UNSUPPORTED};
export {PLUS_JOINER_RE, WHITESPACE_JOINER_RE, PLUSES_RE, WHITESPACE_RE};
