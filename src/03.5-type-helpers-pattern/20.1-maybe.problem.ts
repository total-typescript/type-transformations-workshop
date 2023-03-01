import { Equal, Expect } from "../helpers/type-utils";

/**
 * Here we are again using the generic type, but doing a bit more to it, to demonstrate that we can alternate the returned type of these
 * type helpers.
 */
type Maybe<T> = T | null | undefined;

type tests = [
  Expect<Equal<Maybe<string>, string | null | undefined>>,
  Expect<Equal<Maybe<number>, number | null | undefined>>,
  Expect<Equal<Maybe<boolean>, boolean | null | undefined>>,
  Expect<Equal<Maybe<null>, null | undefined>>,
];
