import { Equal, Expect } from "../helpers/type-utils";

/**
 * Todo: implement GetDataValue
 * reference: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types
 */
type GetDataValue<T> = unknown;

type tests = [
  Expect<Equal<GetDataValue<{ data: "hello" }>, "hello">>,
  Expect<Equal<GetDataValue<{ data: { name: "hello" } }>, { name: "hello" }>>,
  Expect<
    Equal<
      GetDataValue<{ data: { name: "hello"; age: 20 } }>,
      { name: "hello"; age: 20 }
    >
  >,
  // Expect that if you pass in string, it
  // should return never
  Expect<Equal<GetDataValue<string>, never>>,
];
