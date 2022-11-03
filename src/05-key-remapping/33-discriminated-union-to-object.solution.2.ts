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
 * Here, R represents the individual Route. The lesson here
 * is that the thing we're iterating DOESN'T have to be a
 * string | number | symbol, as long as the thing we cast it to
 * is.
 */
type RoutesObject = {
  [R in Route as R["route"]]: R["search"];
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
        "/about": {};
        "/admin": {};
        "/admin/users": {};
      }
    >
  >,
];
