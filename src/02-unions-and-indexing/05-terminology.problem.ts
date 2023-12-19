/**
 * It's important to understand the terminology around unions:
 *
 * One of the type declarations below is a union.
 * One of the type declarations below is a discriminated union.
 * One of the type declarations below is an enum.
 *
 * Which is which?
 */

/**
 * Todo: Which is which?
 * reference: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#discriminated-unions
 * graphql error handling: https://www.notion.so/ichef/Error-Handling-f7087b4eba064f2bbd1121718df3a4e8
 * 
 */
type A =
  | {
      type: "a";
      a: string;
    }
  | {
      type: "b";
      b: string;
    }
  | {
      type: "c";
      c: string;
    };

type B = "a" | "b" | "c";

enum C {
  A = "a",
  B = "b",
  C = "c",
}

export {};
