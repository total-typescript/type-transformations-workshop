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

// TODO: implement TestingFramework
// reference: https://www.typescriptlang.org/docs/handbook/2/keyof-types.html#handbook-content
type TestingFramework = unknown;

type tests = [Expect<Equal<TestingFramework, "vitest" | "jest" | "mocha">>];
