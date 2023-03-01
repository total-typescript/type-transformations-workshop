import { Equal, Expect } from "../helpers/type-utils";

const frontendToBackendEnumMap = {
  singleModule: "SINGLE_MODULE",
  multiModule: "MULTI_MODULE",
  sharedModule: "SHARED_MODULE",
} as const;

/**
 * Here we use ALL the keys of FrontendToBackendEnum as a union in the index, in order to access ALL values as a union.
 */
type FrontendToBackendEnum = typeof frontendToBackendEnumMap;
type BackendModuleEnum = FrontendToBackendEnum[keyof FrontendToBackendEnum];

type tests = [
  Expect<
    Equal<BackendModuleEnum, "SINGLE_MODULE" | "MULTI_MODULE" | "SHARED_MODULE">
  >,
];
