import { Equal, Expect } from "../helpers/type-utils";

interface Example {
  name: string;
  age: number;
  id: string;
  organisationId: string;
  groupId: string;
}

/** For better readability we created this type, which basically filters out only string that have "id" or "Id" anywhere in it. */
type SearchForId = `${string}${'id' | 'Id'}${string}`;

/**
 * Here we now kind of combine mapped types with conditional types! We again use the "as" keyword to check whether the Key extends the
 * type we declared above, to only grab the keys which contain an id/Id in it. If it doesn't match, we return never, which basically
 * tells typescript to NOT include this key in our object at all. If it does match however, then we simply return Key and then use it to
 * access the value type.
 */
type OnlyIdKeys<T> = {
  [Key in keyof T as Key extends SearchForId ? Key : never ]: T[Key]
};

type tests = [
  Expect<
    Equal<
      OnlyIdKeys<Example>,
      {
        id: string;
        organisationId: string;
        groupId: string;
      }
    >
  >,
  Expect<Equal<OnlyIdKeys<{}>, {}>>
];
