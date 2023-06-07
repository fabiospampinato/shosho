
/* MAIN */

const MODIFIER_BITMASK = ( 1n << 8n ) - 1n; // Bitmask that includes all modifier keys and none of the triggers
const TRIGGER_BITMASK = ( ( 1n << 150n ) - 1n ) ^ MODIFIER_BITMASK; // Bitmask that includes all trigger keys and none of the modifiers
const UNSUPPORTED = TRIGGER_BITMASK;

const PLUSES_RE = /\+{2,}/gi;
const WHITESPACE_RE = /\s+/gi;

/* EXPORT */

export {MODIFIER_BITMASK, TRIGGER_BITMASK, UNSUPPORTED};
export {PLUSES_RE, WHITESPACE_RE};
