
/**
 * Here we force the returned array to have at least one element in it. This means that if the user of this type, tries to pass in an
 * empty array, typescript will start yelling at them
 */
type NonEmptyArray<T> = [T, ...T[]];

export const makeEnum = (values: NonEmptyArray<string>) => {};

makeEnum(["a"]);
makeEnum(["a", "b", "c"]);

// @ts-expect-error
makeEnum([]);
