import { Equal, Expect } from "../helpers/type-utils";

type Routes = "/users" | "/users/:id" | "/posts" | "/posts/:id";

/**
 * Todo: implement DynamicRoutes
 * reference: https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#handbook-content
 */
type DynamicRoutes = unknown;

type tests = [Expect<Equal<DynamicRoutes, "/users/:id" | "/posts/:id">>];
