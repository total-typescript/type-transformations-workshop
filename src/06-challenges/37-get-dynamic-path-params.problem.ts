import { Equal, Expect } from "../helpers/type-utils";
import { S } from 'ts-toolbelt';

type UserPath = "/users/:id";

type UserOrganisationPath = "/users/:id/organisations/:organisationId";

/** This challenge is quite tricky, so let's break it down. */

/**
 * For a better understanding let's see at what this part does. Here we split the path that we later pass in as generic, and split it by
 * each slash "/". We then get an Array of strings, where each array element is the string between each slash ["", "users", ":id", ...].
 * Now we want to transform this array, into a union, so that we can iterate through each union member later one, to potentially use as
 * a key value. We do this by using the "[number]" index accessor!
 */
type PathPartUnion = S.Split<UserOrganisationPath, '/'>[number];

/**
 * So now that we have see what the first part of the object mapping does, we can now imagine that "K" now represents the PathPartUnion,
 * we just showed before. Now we take this union and map over it again, to filter it via a template literal to only take those union
 * members, that start with a ":". If that is the case, we return it and use it as a key, otherwise we return never. And at last we can
 * specify the value type, which is of course a string.
 */
type ExtractPathParams<TPath extends string> = {
  [K in S.Split<TPath, '/'>[number] as K extends `:${infer Param}` ? Param : never]: string
}

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<
    Equal<
      ExtractPathParams<UserOrganisationPath>,
      { id: string; organisationId: string }
    >
  >,
];
