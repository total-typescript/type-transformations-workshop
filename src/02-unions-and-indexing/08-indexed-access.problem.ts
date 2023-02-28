import { Equal, Expect } from "../helpers/type-utils";

export const fakeDataDefaults = {
  String: "Default string",
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: "id",
  obj: {
    nestedProp: "hello"
  }
};

/**
 * In typescript, you can use indexes too just as you would do in JS objects, in order to access each property. It is even possible to
 * access nested objects
 */
export type StringType = typeof fakeDataDefaults['String'];
export type IntType = typeof fakeDataDefaults['Int'];
export type FloatType = typeof fakeDataDefaults['Float'];
export type BooleanType = typeof fakeDataDefaults['Boolean'];
export type IDType = typeof fakeDataDefaults['ID'];

/**
 * It is even possible to access nested object's properties
 */
export type NestedPropType = typeof fakeDataDefaults['obj']['nestedProp'];

type tests = [
  Expect<Equal<StringType, string>>,
  Expect<Equal<IntType, number>>,
  Expect<Equal<FloatType, number>>,
  Expect<Equal<BooleanType, boolean>>,
  Expect<Equal<IDType, string>>,
];
