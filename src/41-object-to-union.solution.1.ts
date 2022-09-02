import { Equal, Expect } from "./helpers/type-utils";

interface FruitMap {
  apple: "red";
  banana: "yellow";
  orange: "orange";
}

type FruitTransformer<TFruitMapKey> = TFruitMapKey extends keyof FruitMap
  ? `${TFruitMapKey}:${FruitMap[TFruitMapKey]}`
  : never;

type TransformedFruit = FruitTransformer<keyof FruitMap>;

type tests = [
  Expect<
    Equal<TransformedFruit, "apple:red" | "banana:yellow" | "orange:orange">
  >,
];
