import { Equal, Expect } from "../helpers/type-utils";

type SplitPath = ["", "Users", "John", "Documents", "notes.txt"];

type RemoveEmptyString = unknown;

type ProcessedPath = RemoveEmptyString<SplitPath>;

type tests = [
  Expect<Equal<ProcessedPath, ["Users", "John", "Documents", "notes.txt"]>>,
];
