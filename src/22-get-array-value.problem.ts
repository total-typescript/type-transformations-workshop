import { Equal, Expect } from "./helpers/type-utils";

const fruits = ["apple", "banana", "orange"];

type Fruit = unknown;

type tests = [Expect<Equal<Fruit, "apple" | "banana" | "orange">>];
