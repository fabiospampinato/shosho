
/* MAIN */

type Checker = {
  ( event: Event ): boolean
};

type Disposer = {
  (): void
};

type Handler = {
  ( event?: Event ): boolean | void
};

type ChordNode = {
  children: Partial<Record<string, ChordNode>>,
  handlers: HandlerNode // Pointing to the last item in the linked list
};

type HandlerNode = {
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

/* EXPORT */

export type {Checker, Disposer, Handler, ChordNode, HandlerNode, HandlerOptions, Options};
