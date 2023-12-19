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

// TODO: implement ClickEvent
// reference: https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union
type ClickEvent = unknown;

type tests = [Expect<Equal<ClickEvent, { type: "click"; event: MouseEvent }>>];
