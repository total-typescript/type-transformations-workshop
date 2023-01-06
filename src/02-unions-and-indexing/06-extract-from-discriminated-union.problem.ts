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

// Event['type'] gives an union of type variations from the discriminated union
// I can narrow the type union to just click by using Extract<Event['type'], 'click'>
// Not sure how to use the above to pick the whole Event type of click

// Looking at solution, the missing piece was that the whole key value pair can be extracted

type ClickEvent = Extract<Event, {type: 'click'}>;

type tests = [Expect<Equal<ClickEvent, { type: "click"; event: MouseEvent }>>];
