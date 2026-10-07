// View Transitions API — not yet in the bundled TS DOM lib.
interface ViewTransition {
  finished: Promise<void>;
  ready: Promise<void>;
  updateCallbackDone: Promise<void>;
  skipTransition(): void;
}

interface Document {
  startViewTransition?: (
    updateCallback: () => void | Promise<void>,
  ) => ViewTransition;
}
