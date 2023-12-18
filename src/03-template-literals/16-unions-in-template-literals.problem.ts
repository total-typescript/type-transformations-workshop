import { Equal, Expect } from "../helpers/type-utils";

type BreadType = "rye" | "brown" | "white";

type Filling = "cheese" | "ham" | "salami";

// TODO: implement Sandwich
// Sandwich should be a union of all possible combinations of bread and filling
// reference: https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
type Sandwich = unknown;

type tests = [
  Expect<
    Equal<
      Sandwich,
      | "rye sandwich with cheese"
      | "rye sandwich with ham"
      | "rye sandwich with salami"
      | "brown sandwich with cheese"
      | "brown sandwich with ham"
      | "brown sandwich with salami"
      | "white sandwich with cheese"
      | "white sandwich with ham"
      | "white sandwich with salami"
    >
  >,
];
