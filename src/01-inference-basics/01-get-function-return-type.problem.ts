import { Equal, Expect } from "../helpers/type-utils";

const myFunc = () => {
  return "hello";
};

/**
 * Todo: implement MyFuncReturn
 * reference: https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
 * reference: https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype
 */
type MyFuncReturn = unknown;

type tests = [Expect<Equal<MyFuncReturn, string>>];
