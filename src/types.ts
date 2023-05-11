
/* MAIN */

type Disposer = {
  (): void
};

type Handler = {
  ( event?: KeyboardEvent | MouseEvent ): boolean | void
};

type ChordNode = {
  children: Partial<Record<number, ChordNode>>,
  handlers: HandlerNode // Pointing to the last item in the linked list
};

type HandlerNode = {
  prev?: HandlerNode,
  next?: HandlerNode,
  handler: Handler
};

type Options = {
  capture?: boolean,
  target?: Window | Document | HTMLElement | SVGElement | MathMLElement,
  shouldHandleEvent?: ( event: KeyboardEvent | MouseEvent ) => boolean
};

/* EXPORT */

export type {Disposer, Handler, ChordNode, HandlerNode, Options};
