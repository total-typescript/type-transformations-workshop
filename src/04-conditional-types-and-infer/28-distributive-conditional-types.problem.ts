import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

// TODO: implement GetAppleOrBanana
// "apple" | "banana" | "orange" does not extend "apple" | "banana"
// "apple" | "banana" does extend "apple" | "banana"
// need to find a type that both extends
//   - "apple" | "banana"
//   - "apple" | "banana" | "orange"
type AppleOrBanana = Fruit extends "apple" | "banana" ? Fruit : never;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
