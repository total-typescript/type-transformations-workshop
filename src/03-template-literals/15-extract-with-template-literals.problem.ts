import { Equal, Expect } from "../helpers/type-utils";

type Routes = "/users" | "/users/:id" | "/posts" | "/posts/:id";

/**
 * Here we can again use EXTRACT to get only the dynamic routes (the ones with a ":" anywhere in their path) and as the second argument
 * in the Extract utility type, we can again use template literals to sort of create a "regex" to tell typescript to only allow string
 * that have a ":" somewhere between strings.
 */
type DynamicRoutes = Extract<Routes, `${string}:${string}`>;

type tests = [Expect<Equal<DynamicRoutes, "/users/:id" | "/posts/:id">>];
