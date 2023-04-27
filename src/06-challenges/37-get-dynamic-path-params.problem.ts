import { Equal, Expect } from "../helpers/type-utils";

import { S } from "ts-toolbelt";

type UserPath = "/users/:id";

type UserOrganisationPath = "/users/:id/organisations/:organisationId";

// type SplitPath<T extends string> = S.Split<T, "/">;

type sample<T extends string> = S.Split<T, "/">[number];

type sample2<T> = T extends `:${infer P}` ? P : never;

type result1<T> = sample2<sample<T>>;

type ExtractPathParams<T> = Record<result1<T>, string>;

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<
    Equal<
      ExtractPathParams<UserOrganisationPath>,
      { id: string; organisationId: string }
    >
  >
];
