import { Equal, Expect } from "../helpers/type-utils";

type Route = "/" | "/about" | "/admin" | "/admin/users";

/**
 * Todo: implement RoutesObject
 * reference: https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
 */
type RoutesObject = unknown;

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
