import { Equal, Expect } from "./helpers/type-utils";

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

type FruitTransformer<T> = T extends {
  name: infer TName extends string;
  color: infer TColor extends string;
}
  ? `${TName}:${TColor}`
  : never;

type TransformedFruit = FruitTransformer<Fruit>;

type tests = [
  Expect<
    Equal<TransformedFruit, "apple:red" | "banana:yellow" | "orange:orange">
  >,
];
