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
 * Todo: implement EventType
 * reference: https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
 * hint: discriminated union => union
 */
type EventType = unknown;

type tests = [Expect<Equal<EventType, "click" | "focus" | "keydown">>];
