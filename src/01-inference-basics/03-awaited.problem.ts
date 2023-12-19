import { Equal, Expect } from "../helpers/type-utils";

const getUser = () => {
  return Promise.resolve({
    id: "123",
    name: "John",
    email: "john@example.com",
  });
};

/**
 * Todo: implement ReturnValue
 * reference: https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype
 */
type ReturnValue = ReturnType<typeof getUser>;

type tests = [
  Expect<Equal<ReturnValue, { id: string; name: string; email: string }>>,
];