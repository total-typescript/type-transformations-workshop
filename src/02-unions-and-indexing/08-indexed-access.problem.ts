import { fakeDataDefaults } from "./08-indexed-access.problem";
import { Equal, Expect } from "../helpers/type-utils";

export const fakeDataDefaults = {
  String: "Default string",
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: "id",
};

type FakeDefaults = typeof fakeDataDefaults;

export type StringType = FakeDefaults["String"];
export type IntType = FakeDefaults["Int"];
export type FloatType = FakeDefaults["Float"];
export type BooleanType = FakeDefaults["Boolean"];
export type IDType = FakeDefaults["ID"];

type tests = [
  Expect<Equal<StringType, string>>,
  Expect<Equal<IntType, number>>,
  Expect<Equal<FloatType, number>>,
  Expect<Equal<BooleanType, boolean>>,
  Expect<Equal<IDType, string>>
];
