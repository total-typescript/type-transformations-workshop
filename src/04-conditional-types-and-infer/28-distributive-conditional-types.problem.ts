import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

type ExtendType<T> = T extends "apple" | "banana" ? T : never;

type AppleOrBanana = ExtendType<Fruit>;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
