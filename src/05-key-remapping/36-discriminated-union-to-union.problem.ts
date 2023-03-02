import { Equal, Expect } from "../helpers/type-utils";

type Fruit =
  | {
      name: "apple";
      color: "red";
    }
  | {
      name: "banana";
      color: "yellow";
    }
  | {
      name: "orange";
      color: "orange";
    };

/**
 * Here we transform a discriminated union into the same template literal as we did in the previous exercise. The only remarkable
 * difference here is how we access the values in the end. Now because we are dealing with a discriminated union this time, we
 * can access the values by using the discriminator that we used as key in our object mapping and pass that as the index.
 */
type TransformedFruit = {
  [F in Fruit as F['name']]: `${F['name']}:${F['color']}`
}[Fruit['name']];

type tests = [
  Expect<
    Equal<TransformedFruit, "apple:red" | "banana:yellow" | "orange:orange">
  >,
];
