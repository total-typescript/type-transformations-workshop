import { Equal, Expect } from "../helpers/type-utils";

interface Values {
  email: string;
  firstName: string;
  lastName: string;
}

/**
 * So this is mind-blowing. In order to get the union of the keys and values of an object as a tuple, we first need to map the
 * given object (in this example Value) and transform its value to the desired tuple. So now we end up with an object that has the same
 * keys, but a tuple of [key, value] as its value instead. To now create a union type that consists of all the new value (so the tuples),we
 * simply can index access them with "keyof ObjectInterfaceName". This looks really strange, but when thinking about it, it makes a lot
 * of sense.
 */
type ValuesAsUnionOfTuples = {
  [K in keyof Values]: [K, Values[K]];
}[keyof Values]; /** <- this is the magic part */

type tests = [
  Expect<
    Equal<
      ValuesAsUnionOfTuples,
      ["email", string] | ["firstName", string] | ["lastName", string]
    >
  >
];
