import { Equal, Expect } from "../helpers/type-utils";

type SplitPath = ["", "Users", "John", "Documents", "notes.txt"];

type RemoveEmptyString<T> = T extends [infer Head, ...infer Rest]
  ? Head extends ""
    ? RemoveEmptyString<Rest>
    : [Head, ...RemoveEmptyString<Rest>]
  : T;

type ProcessedPath = RemoveEmptyString<SplitPath>;

type tests = [
  Expect<Equal<ProcessedPath, ["Users", "John", "Documents", "notes.txt"]>>,
];
