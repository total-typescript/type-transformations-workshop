import { Equal, Expect } from "../helpers/type-utils";

/**
 * This example shows the usage of a default value
 */
type CreateDataShape<TData, TError = undefined> = {
  data: TData;
  error: TError;
};

type tests = [
  Expect<
    Equal<
      CreateDataShape<string>,
      {
        data: string;
        error: undefined;
      }
    >
  >,
  Expect<
    Equal<
      CreateDataShape<boolean, SyntaxError>,
      {
        data: boolean;
        error: SyntaxError;
      }
    >
  >,
];
