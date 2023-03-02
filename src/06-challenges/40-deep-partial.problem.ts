import { Equal, Expect } from "../helpers/type-utils";

/**
 * So this solution is ALMOST correct, but not 100%. The reason is because, even tho we deeply made everything optional
 * in a case where you're allowed to add additional members, you can simply do so! But we do not want someone to be able
 * to randomly add values. So for example if one of the nested member is an array, then the user can still do for example
 * g: [undefined, { h: '123' }], even tho we have only declared h and i in the original object (MyType). So to restrict
 * this, we need to add a check for Arrays like in the example below.
 */
type AlmostDeepPartial<T> = {
  [K in keyof T]?: DeepPartial<T[K]>
};

/**
 * So here you can see we catch the issue with array, infer whatever is inside that array and then create a new array
 * where the inferred content of the array is being partialised, so that it must either be empty or match exactly the
 * structure of the original object.
 */
type DeepPartial<T> = T extends Array<infer A>
  ? Array<DeepPartial<A>>
  : {
    [K in keyof T]?: DeepPartial<T[K]>
  };

type MyType = {
  a: string;
  b: number;
  c: {
    d: string;
    e: {
      f: string;
      g: {
        h: string;
        i: string;
      }[];
    };
  };
};

type Result = DeepPartial<MyType>;

type tests = [
  Expect<
    Equal<
      Result,
      {
        a?: string;
        b?: number;
        c?: {
          d?: string;
          e?: {
            f?: string;
            g?: {
              h?: string;
              i?: string;
            }[];
          };
        };
      }
    >
  >
];
