import { Equal, Expect } from "../helpers/type-utils";

type Route =
  | {
      route: "/";
      search: {
        page: string;
        perPage: string;
      };
    }
  | { route: "/about" }
  | { route: "/admin" }
  | { route: "/admin/users" };

/**
 * So the solution I came up with here actually works pretty well, but we can take this a tiny step further.
 * What have we said about accessing values inside a ternary expression?? (something something infer, right?)
 */
type RoutesObject = {
  [R in Route as R['route']]: R extends { search: any } ? R['search'] : never
};

/**
 * Yes, so here is the same solution but with infer, which makes it a bit prettier and more clear that we do
 * not care what type specifically we expect there (because before we have put a random "any" there), we just
 * want to grab whatever is there and return it. So if somebody reads our code, they don't need to worry about
 * "what is this any type here for?".
 */
type RoutesObject2 = {
  [R in Route as R['route']]: R extends { search: infer Search } ? Search : never
};

type tests = [
  Expect<
    Equal<
      RoutesObject,
      {
        "/": {
          page: string;
          perPage: string;
        };
        "/about": never;
        "/admin": never;
        "/admin/users": never;
      }
    >
  >,
  Equal<
    RoutesObject2,
    {
      "/": {
        page: string;
        perPage: string;
      };
      "/about": never;
      "/admin": never;
      "/admin/users": never;
    }
  >
];
