// TODO: extend the Maybe type to not allow null or undefined values.
// reference: https://stackoverflow.com/questions/62552915/significance-of-extends
export type Maybe<T> = T | null | undefined;

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
