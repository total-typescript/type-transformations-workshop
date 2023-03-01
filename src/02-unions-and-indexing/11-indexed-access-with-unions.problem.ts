import { Equal, Expect } from "../helpers/type-utils";

export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const;

type ProgramModeEnum = typeof programModeEnumMap;

/**
 * First solution, shows you how you can use a union indexed kind of approach. So unions can also be used inside the indexing, which in
 * itself returns a union of all the indexed value! Pretty neat!
 */
export type IndividualProgram = ProgramModeEnum[
  | 'ONE_ON_ONE'
  | 'SELF_DIRECTED'
  | 'PLANNED_ONE_ON_ONE'
  | 'PLANNED_SELF_DIRECTED'
];

/**
 * The second solution, shows you an approach with the before learned EXCLUDE utility type. We exclude all the keys of the
 * ProgramModeEnum that we don't want, which creates a union of all keys we DO want. We can then use that union of keys, as indexes,
 * just like we did in the first solution. This would ofc also work, if we nested the EXCLUDE operation inside the index brackets [].
 * Pretty cool!
 */
type OnlyIndividualProgramKeys = Exclude<keyof ProgramModeEnum, 'GROUP' | 'ANNOUNCEMENT'>

export type IndividualProgram2 = ProgramModeEnum[OnlyIndividualProgramKeys]

type tests = [
  Expect<
    Equal<
      IndividualProgram2,
      "1on1" | "selfDirected" | "planned1on1" | "plannedSelfDirected"
    >
  >,
];
