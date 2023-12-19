import { Equal, Expect } from "../helpers/type-utils";

const fruits = ["apple", "banana", "orange"] as const;

/**
 * Todo: implement AppleOrBanana and Fruit
 * reference: https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
 */
type AppleOrBanana = unknown;
type Fruit = unknown;

type tests = [
  Expect<Equal<AppleOrBanana, "apple" | "banana">>,
  Expect<Equal<Fruit, "apple" | "banana" | "orange">>,
];
