import { Equal, Expect } from "../helpers/type-utils";

/**
 * Unfortunately in the current version of typescript (4.8.2) there is no other way of expression if-conditions other than in ternary
 * expressions. Which in case we want to use multiple if-statements, we need to use nested ternary expressions.
 */
type YouSayGoodbyeAndISayHello<T> = T extends "hello" | "goodbye"
  ? T extends "goodbye" ? "hello" : "goodbye"
  : never;

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"alright pal">, never>>,
  Expect<Equal<YouSayGoodbyeAndISayHello<1>, never>>,
];
