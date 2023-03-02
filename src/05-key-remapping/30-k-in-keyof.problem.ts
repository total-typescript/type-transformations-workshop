import { Equal, Expect } from "../helpers/type-utils";

interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

/**
 * Here we are using the "keyof" keyword to access all keys of an object we would like to map into a new type. This even allows use to
 * access the "value" of that object, by using the key to access the property.
 */
type AttributeGetters = {
  [key in keyof Attributes]: () => Attributes[key]
};

type tests = [
  Expect<
    Equal<
      AttributeGetters,
      {
        firstName: () => string;
        lastName: () => string;
        age: () => number;
      }
    >
  >,
];
