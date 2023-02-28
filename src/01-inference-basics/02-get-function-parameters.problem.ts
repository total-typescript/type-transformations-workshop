import { Equal, Expect } from "../helpers/type-utils";

const makeQuery = (
  url: string,
  opts?: {
    method?: string;
    headers?: {
      [key: string]: string;
    };
    body?: string;
  },
) => {};

type MakeQueryParameters = Parameters<typeof makeQuery>;

/**
 * Additional info:
 *
 * Now that we extracted the parameters as a tuple (since makeQuery accepts 2 parameters), you could also access only the second parameter
 * type by using indexes, such as:
 */
type MakeQuerySecondParameter = MakeQueryParameters[1];

const parameters: MakeQueryParameters = ['testurl', { method: 'testMethod' }];
const secondParameter: MakeQuerySecondParameter = { headers: { Location: 'some location' } };

type tests = [
  Expect<
    Equal<
      MakeQueryParameters,
      [
        url: string,
        opts?: {
          method?: string;
          headers?: {
            [key: string]: string;
          };
          body?: string;
        },
      ]
    >
  >,
];
