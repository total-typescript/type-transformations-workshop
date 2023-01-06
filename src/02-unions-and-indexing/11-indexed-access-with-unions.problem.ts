import { Equal, Expect } from "../helpers/type-utils";

export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const;

// const assertion makes the property keys readonly
type ProgramModeEnumMap = typeof programModeEnumMap;

// get the keys of type and exclude the ones not needed
type IndividualProgramWithoutGroupAndAnnouncement = Exclude<keyof ProgramModeEnumMap, 'GROUP' | 'ANNOUNCEMENT'>;

export type IndividualProgram = ProgramModeEnumMap[IndividualProgramWithoutGroupAndAnnouncement];

type tests = [
  Expect<
    Equal<
      IndividualProgram,
      "1on1" | "selfDirected" | "planned1on1" | "plannedSelfDirected"
    >
  >,
];
