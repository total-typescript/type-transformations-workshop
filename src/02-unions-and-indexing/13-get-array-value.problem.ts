import { Equal, Expect } from "../helpers/type-utils";

const fruits = ["apple", "banana", "orange"] as const;

// to pick the exact values in the array as type, make the array as constant
// use the index access to pick the values as types (or) use number to pick all the values as an union type
type AppleOrBanana = typeof fruits[0 | 1];
type Fruit = typeof fruits[number];

type tests = [
  Expect<Equal<AppleOrBanana, "apple" | "banana">>,
  Expect<Equal<Fruit, "apple" | "banana" | "orange">>,
];
