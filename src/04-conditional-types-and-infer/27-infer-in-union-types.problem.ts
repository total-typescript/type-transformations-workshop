import { Equal, Expect } from "../helpers/type-utils";

const parser1 = {
  parse: () => 1,
};

const parser2 = () => "123";

const parser3 = {
  extract: () => true,
};

/**
 * Here instead of using nested ternary expressions, we can simply use a union to check whether T extends this or that or the other.
 */
type GetParserResult<T> = T extends
  | { parse: () => infer TParser }
  | { extract: () => infer TParser }
  | (() => infer TParser)
  ? TParser
  : never;

type tests = [
  Expect<Equal<GetParserResult<typeof parser1>, number>>,
  Expect<Equal<GetParserResult<typeof parser2>, string>>,
  Expect<Equal<GetParserResult<typeof parser3>, boolean>>,
];
