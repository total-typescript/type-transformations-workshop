import { Equal, Expect } from "../helpers/type-utils";

// YouSayGoodbyeAndISayHello should be
//   - "goodbye" if T is "hello"
//   - "hello" if T is "goodbye"
//   - never if T is anything else
// reference: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
type YouSayGoodbyeAndISayHello<T> = T extends "hello" ? "goodbye" : "hello";

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"alright pal">, never>>,
  Expect<Equal<YouSayGoodbyeAndISayHello<1>, never>>,
];
