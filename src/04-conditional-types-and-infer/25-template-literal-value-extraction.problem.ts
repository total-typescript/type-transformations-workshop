import { Equal, Expect } from "../helpers/type-utils";

type Names = [
  "Matt Pocock",
  "Jimi Hendrix",
  "Eric Clapton",
  "John Mayer",
  "BB King",
];

/**
 * Todo: implement GetSurname
 * reference: * reference: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types
 * hint: "Matt Pocock" is like `${string} ${string}`
 */
type GetSurname<T> = unknown;

type tests = [
  Expect<Equal<GetSurname<Names[0]>, "Pocock">>,
  Expect<Equal<GetSurname<Names[1]>, "Hendrix">>,
  Expect<Equal<GetSurname<Names[2]>, "Clapton">>,
  Expect<Equal<GetSurname<Names[3]>, "Mayer">>,
  Expect<Equal<GetSurname<Names[4]>, "King">>,
];
