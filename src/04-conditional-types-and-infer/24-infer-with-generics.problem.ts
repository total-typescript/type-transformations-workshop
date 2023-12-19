import { Equal, Expect } from "../helpers/type-utils";

interface MyComplexInterface<Event, Context, Name, Point> {
  getEvent: () => Event;
  getContext: () => Context;
  getName: () => Name;
  getPoint: () => Point;
}

type Example = MyComplexInterface<
  "click",
  "window",
  "my-event",
  { x: 12; y: 14 }
>;

// TODO: implement GetPoint type
// GetPoint should extract the type of the Point property from `T` if
// `T` extends MyComplexInterface
type GetPoint<T> = unknown;

type tests = [Expect<Equal<GetPoint<Example>, { x: 12; y: 14 }>>];
