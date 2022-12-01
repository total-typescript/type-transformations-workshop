import { Equal, Expect } from "../helpers/type-utils";

type DeepPartial<T> = T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : { [K in keyof T]?: DeepPartial<T[K]> };

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
  >,
];
