// Depends on knowing template literals first

import { Equal, Expect } from "./helpers/type-utils";

type Route = "/" | "/about" | "/admin" | "/admin/users";

type AdminRoute = unknown;

type tests = [Expect<Equal<AdminRoute, "/admin" | "/admin/users">>];
