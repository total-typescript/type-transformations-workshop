import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

type AppleOrBanana = Fruit extends infer T
  ? T extends "apple" | "banana"
    ? Fruit
    : never
  : never;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
