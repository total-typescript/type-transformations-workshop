import { Equal, Expect } from "../helpers/type-utils";
import { infer } from 'zod';

/**
 * There are 2 possible solutions to this problem.
 *
 * This first solution look very straight forward, as you simply just check if the type has a data property in it and then access the
 * data via index. But there is a better way.
 */
type GetDataValue<T> = T extends { data: any }
  ? T['data']
  : never;

/**
 * Here in the second solution we use typescript's keyword "infer". What this does, it infers the type that was passed in the property
 * data and gives it a new name (in this case TData). This new named type is now available in the true case of the ternary expression
 * (scoped) and can be used for all sorts of things. This gives you more freedom to further transform this type and work with it.
 * Basically everytime when a type needs to be extracted you should try to use the "infer" keyword.
 */
type GetDataValue2<T> = T extends { data: infer TData }
  ? TData
  : never;

type tests = [
  Expect<Equal<GetDataValue<{ data: "hello" }>, "hello">>,
  Expect<Equal<GetDataValue<{ data: { name: "hello" } }>, { name: "hello" }>>,
  Expect<
    Equal<
      GetDataValue<{ data: { name: "hello"; age: 20 } }>,
      { name: "hello"; age: 20 }
    >
  >,
  // Expect that if you pass in string, it
  // should return never
  Expect<Equal<GetDataValue<string>, never>>,
];
