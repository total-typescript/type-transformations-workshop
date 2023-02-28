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
 * This is a discriminated union
 *
 * Main difference between a union and a discriminated union, is that a discriminated union have one or more common properties that can
 * differentiate them. For example in type A, the common property is "type" and it can be used to determine, which of the following
 * object we are currently dealing with (see example below).
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

const fn = (discUnion: A) => {
  if (discUnion.type === "b") {
    // Now in here we have access to properties, that only exist in the discriminated object of "type: b"
    console.log(discUnion.b)
  }

  // Whereas if we tried to use a non-common property in an undiscriminated environment (outside of if, in this example), we will get an
  // error
  // @ts-ignore
  console.log(discUnion.b);
};

/**
 * This is a union
 *
 * Different from the discriminated union, we do not have any properties or whatsoever that would differentiate each union. So accessing
 * each union in this type is pretty simple and possible in any circumstances. This makes it a non-discriminated union, or simply just a
 * union.
 */
type B = "a" | "b" | "c";

/** This is an enum */
enum C {
  A = "a",
  B = "b",
  C = "c",
}

export {};
