import { Equal, Expect } from "../helpers/type-utils";

type Route = "/" | "/about" | "/admin" | "/admin/users";

/**
 * Here we sort of iterate over the "Route" union and use each member of the union to create a key/value pair in an object.
 */
type RoutesObject = {
  [R in Route]: R
}

type tests = [
  Expect<
    Equal<
      RoutesObject,
      {
        "/": "/";
        "/about": "/about";
        "/admin": "/admin";
        "/admin/users": "/admin/users";
      }
    >
  >,
];
