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

// In the discriminator union the discriminator key's type can be picked through index access
type EventType = Event['type'];

type tests = [Expect<Equal<EventType, "click" | "focus" | "keydown">>];
