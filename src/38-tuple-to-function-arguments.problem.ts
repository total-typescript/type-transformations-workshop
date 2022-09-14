import { Equal, Expect } from "./helpers/type-utils";

type MyArgs = [a: string, b: number, c: boolean];

const myFunc = (...args: unknown) => {
  return `a: ${args[0]}, b: ${args[1]}, c: ${args[2]}`;
};

type tests = [Expect<Equal<typeof myFunc, (...args: MyArgs) => string>>];
