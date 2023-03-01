import { Equal, Expect } from "../helpers/type-utils";

/**
 * Here we first time use the "extends" keyword in the return body, of the type function. Here it also sort of acts like matcher and can
 * be used to do a ternary operator.
 */
type YouSayGoodbyeAndISayHello<T extends 'hello' | 'goodbye'> = T extends 'hello' ? 'goodbye' : 'hello';

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>,
];
