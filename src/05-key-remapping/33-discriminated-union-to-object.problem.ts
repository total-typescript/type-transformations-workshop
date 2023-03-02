import { Equal, Expect } from "../helpers/type-utils";

type Route =
  | {
      route: "/";
      search: {
        page: string;
        perPage: string;
      };
    }
  | { route: "/about"; search: {} }
  | { route: "/admin"; search: {} }
  | { route: "/admin/users"; search: {} };

/**
 * There are 2 solutions for this Problem
 *
 * Solution 1: A bit tricky
 * Here we use the discriminator of the discriminated union "Route", which the "route" attribute and use its value as key and save it as
 * a new type called "R".
 * We then use the new type "R" to Extract the desired member of the union to then access the "search" property and assign its value
 * type to our value type.
 */
type RoutesObject = {
  [R in Route['route']]: Extract<Route, { route: R }>['search']
};

/**
 * Solution 2: Waaayy better
 * Here we DON'T iterate via the discriminator, we instead use the whole union member object and put it in "R". Without the "as"
 * keyword, it seems like we cannot do that, because typescript yells at us. But that is only because, we actually cannot put an object
 * as a key, which is why we NEED the "as" keyword, to tell typescript what to use instead. So in the end it IS INDEED possible to
 * iterate through the whole union member object!
 * We then tell on the key-side to convert itself s R['route'] which accesses the value of the "route" attribute from the object that we
 * are currently iterating through and on the value-side, we want the "search" property of the current iterated object. Very cool!
 */
type RoutesObject2 = {
  [R in Route as R['route']]: R['search']
}

type tests = [
  Expect<
    Equal<
      RoutesObject,
      {
        "/": {
          page: string;
          perPage: string;
        };
        "/about": {};
        "/admin": {};
        "/admin/users": {};
      }
    >
  >,
  Expect<
    Equal<
      RoutesObject2,
      {
        "/": {
          page: string;
          perPage: string;
        };
        "/about": {};
        "/admin": {};
        "/admin/users": {};
      }
    >
  >,
];
