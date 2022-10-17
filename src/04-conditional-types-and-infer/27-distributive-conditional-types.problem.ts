import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

type AppleOrBanana = Fruit extends "apple" | "banana" ? Fruit : never;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
