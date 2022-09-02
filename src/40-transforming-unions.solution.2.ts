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

type TransformedFruit = {
  [F in Fruit["name"]]: `${F}:${Extract<Fruit, { name: F }>["color"]}`;
}[Fruit["name"]];

type tests = [
  Expect<
    Equal<TransformedFruit, "apple:red" | "banana:yellow" | "orange:orange">
  >,
];
