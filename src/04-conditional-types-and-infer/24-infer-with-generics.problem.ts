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

/**
 * Here we can see how powerful that infer is. At first glance it seems harmless, but since we practically want to get the return type
 * of the "getPoint" function inside "MyComplexInterface" we solved it very smoothly this way, because we are using the type level of
 * MyComplexInterface and directly taking the type of Point, which is used as the return type for getPoint().
 */
type GetPoint<T> = T extends MyComplexInterface<any, any, any, infer TPoint>
  ? TPoint
  : never;

/**
 * If we for example wanted to do that without the "infer" keyword then it would look something like that.
 *
 * This of course works, but here we are dealing with the VALUE level of MyComplexInterface, because we are accessing the getPoint
 * property inside it. This requires us to also use the ReturnType utility type. So since the VALUE level of the interface is more
 * likely to change, due to a refactor, it is much safer to access the return type via infer instead!
 */
type GetPoint2<T> = T extends MyComplexInterface<any, any, any, any>
  ? ReturnType<T['getPoint']>
  : never;

type tests = [Expect<Equal<GetPoint<Example>, { x: 12; y: 14 }>>];
