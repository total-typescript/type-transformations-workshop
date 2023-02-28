import { Equal, Expect } from "../helpers/type-utils";

export type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

/**
 * You can access properties of a discriminated union like so, as long as the key exists on each member of the union
 */
type EventType = Event['type'];

type tests = [Expect<Equal<EventType, "click" | "focus" | "keydown">>];
