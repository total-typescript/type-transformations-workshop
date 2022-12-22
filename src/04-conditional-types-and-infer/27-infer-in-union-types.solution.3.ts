import { never } from "zod";
import { Equal, Expect } from "../helpers/type-utils";

const parser1 = {
  parse: () => 1,
};

const parser2 = () => "123";

const parser3 = {
  extract: () => true,
};

const parser4 = {
  test: () => "a",
  test2: () => true,
};

type GetParserResult<T> = T extends
  | Record<string, () => infer TResult>
  | (() => infer TResult)
  ? TResult
  : never;

type tests = [
  Expect<Equal<GetParserResult<typeof parser1>, number>>,
  Expect<Equal<GetParserResult<typeof parser2>, string>>,
  Expect<Equal<GetParserResult<typeof parser3>, boolean>>,
  Expect<Equal<GetParserResult<typeof parser4>, string | boolean>>
];
