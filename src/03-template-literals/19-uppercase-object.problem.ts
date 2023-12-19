import { Equal, Expect } from "../helpers/type-utils";

type Event = `log_in` | "log_out" | "sign_up";

/**
 * Todo: implement ObjectOfKeys
 * reference: https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#uppercasestringtype
 * reference: https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type
 * hint: union => record with uppercase key
 */
type ObjectOfKeys = unknown;

type tests = [
  Expect<
    Equal<
      ObjectOfKeys,
      {
        LOG_IN: string;
        LOG_OUT: string;
        SIGN_UP: string;
      }
    >
  >,
];
