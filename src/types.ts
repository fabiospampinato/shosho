
/* MAIN */

type Checker = {
  ( event: Event ): boolean
};

type Disposer = {
  (): void
};

type Format = (
  'electron' |
  'symbols' |
  'long-flexible-directional' |
  'long-flexible-nondirectional' |
  'long-inflexible-directional' |
  'long-inflexible-nondirectional' |
  'short-flexible-directional' |
  'short-flexible-nondirectional' |
  'short-inflexible-directional' |
  'short-inflexible-nondirectional'
);

type Handler = {
  ( event?: Event ): boolean | void
};

type ChordNode = {
  children: Partial<Record<string, ChordNode>>,
  handlers: HandlerNode // Pointing to the last item in the linked list
};

type HandlerNode = {
  parent?: ChordNode,
  prev?: HandlerNode,
  next?: HandlerNode,
  handler: Handler
};

type HandlerOptions = {
  konami?: boolean
};

type Options = {
  capture?: boolean,
  target?: Window | Document | HTMLElement | SVGElement | MathMLElement,
  shouldHandleEvent?: ( event: Event ) => boolean
};

type RecordHandler = {
  ( shortcut: string ): void
};

type RecordOptions = {
  limit?: number,
  passthrough?: boolean,
  shouldHandleEvent?: ( event: Event ) => boolean
};

/* EXPORT */

export type {Checker, Disposer, Format, Handler, ChordNode, HandlerNode, HandlerOptions, Options, RecordHandler, RecordOptions};
