import { Equal, Expect } from "../helpers/type-utils";

const testingFrameworks = {
  vitest: {
    label: "Vitest",
  },
  jest: {
    label: "Jest",
  },
  mocha: {
    label: "Mocha",
  },
};

/** Note that keyof is a keyword provided by typescript, thus it can only be used with types, not with runtime variables. */
type TestingFramework = keyof typeof testingFrameworks;

type tests = [Expect<Equal<TestingFramework, "vitest" | "jest" | "mocha">>];
