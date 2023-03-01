import { Equal, Expect } from "../helpers/type-utils";

type BreadType = "rye" | "brown" | "white";

type Filling = "cheese" | "ham" | "salami";

/**
 * Here we can use unions inside template literals and typescript will automatically create a new union with all possible strings! This
 * is extremely powerful, but must be carefully used, because if you extend this with more unions, then eventually you will reach
 * typescript's limit of possible union members (capped at 10 or 100 thousand, not sure).
 */
type Sandwich = `${BreadType} sandwich with ${Filling}`;

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
  >
];
