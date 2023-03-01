
/**
 * So this one is interesting. Here we want to be able to pass anything into our type function argument EXCEPT null or undefined. This
 * is done simply by constraining the argument to an empty object "{}". Now why does this work?
 *
 * Since in JS everything is an object, no matter if it's an array, falsy value or a string. Everything in its core is an object. Now
 * here in the type function's argument, typescript doesn't really care about what else you have inside the object, as long as a part of
 * it matches the constraint.
 */
export type Maybe<T extends {}> = T | null | undefined;

/**
 * So as we see here in the second example, if we add a property to the object, that is constraining the argument, you can still add an
 * object that has additional props, as long as it also contains the property ("prop") in the constraining object.
 */
type Maybe2<T extends { prop: boolean }> = T;

type Example = Maybe2<{ prop: true, prop2: 'I can be here too' }>
// @ts-expect-error
type Example2 = Maybe2<{ differentProp: true }>

type tests = [
  // @ts-expect-error
  Maybe<null>,
  // @ts-expect-error
  Maybe<undefined>,

  Maybe<string>,
  Maybe<false>,
  Maybe<0>,
  Maybe<"">,
];
