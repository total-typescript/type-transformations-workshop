import { Equal, Expect } from "./helpers/type-utils";

type Route = "/" | "/about" | "/admin" | "/admin/users";

type AdminRoute = Extract<Route, `/admin${string}`>;

type tests = [Expect<Equal<AdminRoute, "/admin" | "/admin/users">>];
