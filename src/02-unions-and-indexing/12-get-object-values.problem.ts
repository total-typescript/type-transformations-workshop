import { Equal, Expect } from "../helpers/type-utils";

const frontendToBackendEnumMap = {
  singleModule: "SINGLE_MODULE",
  multiModule: "MULTI_MODULE",
  sharedModule: "SHARED_MODULE",
} as const;

// get the typeof the const
type FrontendToBackendEnumMap = typeof frontendToBackendEnumMap;

// get the keys of the type and then index access of the keys union type to get the values of it
type BackendModuleEnum = FrontendToBackendEnumMap[keyof FrontendToBackendEnumMap];

type tests = [
  Expect<
    Equal<BackendModuleEnum, "SINGLE_MODULE" | "MULTI_MODULE" | "SHARED_MODULE">
  >,
];
