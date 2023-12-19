import { Equal, Expect } from "../helpers/type-utils";

/**
 * Todo: implement YouSayGoodbyeAndISayHello
 * reference: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
 */
type YouSayGoodbyeAndISayHello<T> = unknown;

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>,
];
