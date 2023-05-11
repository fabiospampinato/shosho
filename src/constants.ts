
/* MAIN */

const MODIFIER_BITMASK = 0b11111111_00000000; // Bitmask that includes all modifier keys and none of the triggers
const TRIGGER_BITMASK = 0b00000000_11111111; // Bitmask that includes all trigger keys and none of the modifiers

const PLUSES_RE = /\+{2,}/gi;
const WHITESPACE_RE = /\s+/gi;

/* EXPORT */

export {MODIFIER_BITMASK, TRIGGER_BITMASK};
export {PLUSES_RE, WHITESPACE_RE};
