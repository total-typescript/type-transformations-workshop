// import { S } from "ts-toolbelt";

import { Equal, Expect } from "../helpers/type-utils";

type Path = "Users/John/Documents/notes.txt";

/**
 * Todo: implement SplitPath
 * reference: https://millsp.github.io/ts-toolbelt/modules/string_split.html
 */
type SplitPath = unknown;

type tests = [
  Expect<Equal<SplitPath, ["Users", "John", "Documents", "notes.txt"]>>,
];
