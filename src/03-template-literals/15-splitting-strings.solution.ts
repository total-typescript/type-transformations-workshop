import { S } from "ts-toolbelt";
import { Equal, Expect } from "../helpers/type-utils";

type Path = "Users/John/Documents/notes.txt";

type SplitPath = S.Split<Path, "/">;

type tests = [
  Expect<Equal<SplitPath, ["Users", "John", "Documents", "notes.txt"]>>,
];
