import { Equal, Expect } from "../helpers/type-utils";

interface Attributes {
  id: string;
  email: string;
  username: string;
}

/**
 * How do we create a type helper that represents a union
 * of all possible combinations of Attributes?
 */

/**
 * Interesting challenge. Here we again create a mapped object type, where we first try to construct each of the wanted output as value
 * for each key. So that we can in the end, as we have learned, create a union out of it, by just accessing them via a "keyof" index.
 */
type MutuallyExclusive<T> = {
  [Key in keyof T]: Record<Key, T[Key]>
}[keyof T];

/** One cool advantage of this type, is that an object that has this type MUST at least have one of the unions defined. */
const example: MutuallyExclusive<Attributes> = {
  id: '123',
  email: '232'
};

type ExclusiveAttributes = MutuallyExclusive<Attributes>;

type tests = [
  Expect<
    Equal<
      ExclusiveAttributes,
      | {
          id: string;
        }
      | {
          email: string;
        }
      | {
          username: string;
        }
    >
  >,
];
