import { Equal, Expect } from "../helpers/type-utils";

// TODO: implement AddRoutePrefix
// reference: https://www.typescriptlang.org/docs/handbook/2/generics.html#handbook-content:~:text=Instead%20of%20working,denote%20our%20constraint%3A
type AddRoutePrefix<TRoute> = `/${TRoute}`;

type tests = [
  Expect<Equal<AddRoutePrefix<"">, "/">>,
  Expect<Equal<AddRoutePrefix<"about">, "/about">>,
  Expect<Equal<AddRoutePrefix<"about/team">, "/about/team">>,
  Expect<Equal<AddRoutePrefix<"blog">, "/blog">>,
  // @ts-expect-error
  AddRoutePrefix<boolean>,
  // @ts-expect-error
  AddRoutePrefix<number>,
];
