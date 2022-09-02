import { Equal, Expect } from "./helpers/type-utils";

const fruits = ["apple", "banana", "orange"] as const;

type Fruit = typeof fruits[number];

type tests = [Expect<Equal<Fruit, "apple" | "banana" | "orange">>];
