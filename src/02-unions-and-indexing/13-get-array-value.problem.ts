import { Equal, Expect } from "../helpers/type-utils";

const fruits = ["apple", "banana", "orange"] as const;

/**
 * Here we can index certain types inside a constant array again via a union with the index numbers, or if we want to access ALL types
 * and create a union type out of them, then we can simply pass "number" as index, and it will always grab all elements in an array.
 */
type AppleOrBanana = typeof fruits[0 | 1];
type Fruit = typeof fruits[number];

type tests = [
  Expect<Equal<AppleOrBanana, "apple" | "banana">>,
  Expect<Equal<Fruit, "apple" | "banana" | "orange">>,
];
