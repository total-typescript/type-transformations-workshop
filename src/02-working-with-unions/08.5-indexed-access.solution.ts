import { Equal, Expect } from "../helpers/type-utils";

export const fakeDataDefaults = {
  String: "Default string",
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: "id",
};

export type StringType = typeof fakeDataDefaults["String"];
export type IntType = typeof fakeDataDefaults["Int"];
export type FloatType = typeof fakeDataDefaults["Float"];
export type BooleanType = typeof fakeDataDefaults["Boolean"];
export type IDType = typeof fakeDataDefaults["ID"];

type tests = [
  Expect<Equal<StringType, string>>,
  Expect<Equal<IntType, number>>,
  Expect<Equal<FloatType, number>>,
  Expect<Equal<BooleanType, boolean>>,
  Expect<Equal<IDType, string>>,
];
