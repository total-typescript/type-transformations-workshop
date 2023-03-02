import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

/**
 * There are 2 solutions to this.
 *
 * Solution 1:
 * The first one is to make AppleOrBanana generic and then use the "extends" keyword on the generic type, then return it or never.
 * When using this solution, then what happens is that the union "Fruit" sort of gets iterated through "AppleOrBanana", so that each member
 * of the Fruit union is being checked and then returned, one by one.
 */
type AppleOrBanana<T> = T extends "apple" | "banana"
  ? T
  : never;

/**
 * Whereas, if you try to do the "gotcha" solution (which is wrong btw, but used for demo here), then this will always return never,
 * because here we compare the WHOLE type of Fruit (which is "apple" | "banana" | "orange") to the WHOLE type of "apple" | "banana". So
 * since "orange" is missing, this will enver be true.
 */
type AppleOrBanana2 = Fruit extends "apple" | "banana"
  ? "apple" | "banana"
  : never;

/**
 * Solution 2:
 * If we want to insist on not using a generic tho, we can sort of create a generic type inside the conditional type. We can then use
 * extend on that newly created generic and then return that one, if true, else return never. Quite a brain fk, but good to know!
 */
type AppleOrBanana3 = Fruit extends infer T
  ? T extends "apple" | "banana"
    ? T
    : never
  : never

type tests = [
  Expect<Equal<AppleOrBanana<Fruit>, "apple" | "banana">>,
  // @ts-expect-error
  Expect<Equal<AppleOrBanana2, "apple" | "banana">>,
  Expect<Equal<AppleOrBanana3, "apple" | "banana">>
];
