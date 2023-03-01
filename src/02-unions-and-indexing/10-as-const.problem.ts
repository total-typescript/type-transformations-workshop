import { Equal, Expect } from "../helpers/type-utils";

/**
 * Some docs that might help!
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions
 */

/**
 * the "as const" keyword here, makes the object (or other data types) IMMUTABLE. All properties in this object become readonly and cannot
 * be altered anymore. This is very interesting, because this way you could possibly create an enum object, that can hold more than just
 * a string, for example a whole object or complex structures! This way you can create more sophisticated enums than with typescript's
 * ENUM, which is a weird construct in itself anyway.
 *
 * Another interesting fact about "as const" is that it deeply makes all fields readonly, so even if there was an object inside, with
 * its own properties, it would make those readonly too, whereas the "Object.freeze()" method only works for first level properties. "as
 * const" also doesn't add anything to the runtime, it purely lives on the type level, which means it won't cost any resource during
 * runtime.
 */
export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
  obj: {
    nestedProp: 'i am readonly too!'
  }
} as const;

/**
 * So for example if you try to reassign a property, typescript won't let you.
 */
// @ts-ignore
programModeEnumMap.GROUP = 'somethingElse';

/**
 * As previously mentioned, this even works for other data types, such as array
 */
const constantArray = [1, 2, 3] as const;
// @ts-ignore
constantArray[0] = 2;

export type GroupProgram = typeof programModeEnumMap["GROUP"];
export type AnnouncementProgram = typeof programModeEnumMap["ANNOUNCEMENT"];
export type OneOnOneProgram = typeof programModeEnumMap["ONE_ON_ONE"];
export type SelfDirectedProgram = typeof programModeEnumMap["SELF_DIRECTED"];
export type PlannedOneOnOneProgram =
  typeof programModeEnumMap["PLANNED_ONE_ON_ONE"];
export type PlannedSelfDirectedProgram =
  typeof programModeEnumMap["PLANNED_SELF_DIRECTED"];

type tests = [
  Expect<Equal<GroupProgram, "group">>,
  Expect<Equal<AnnouncementProgram, "announcement">>,
  Expect<Equal<OneOnOneProgram, "1on1">>,
  Expect<Equal<SelfDirectedProgram, "selfDirected">>,
  Expect<Equal<PlannedOneOnOneProgram, "planned1on1">>,
  Expect<Equal<PlannedSelfDirectedProgram, "plannedSelfDirected">>,
];
