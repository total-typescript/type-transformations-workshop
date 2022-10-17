/**
 * A is a discriminated union, with 'type' as the discriminator.
 *
 * Discriminated unions have common properties which are used to
 * differentiate between members of the union. In this case, type
 * is the discriminator.
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

/**
 * B is a union, but not a discriminated union.
 */
type B = "a" | "b" | "c";

/**
 * C is an enum.
 */
enum C {
  A = "a",
  B = "b",
  C = "c",
}

export {};
