import { Equal, Expect } from "../helpers/type-utils";

/**
 * Here we use generics to kind of transform a static type into a function, which takes an argument inside the angled brackets and then
 * returns a new type. These arguments can be used in many ways too, such as use default values, or restrict them and so on. Matt calls
 * these kind of functions, "type helpers".
 */
type ReturnWhatIPassIn<TPassed> = TPassed;

type tests = [
  Expect<Equal<ReturnWhatIPassIn<1>, 1>>,
  Expect<Equal<ReturnWhatIPassIn<"1">, "1">>,
  Expect<Equal<ReturnWhatIPassIn<true>, true>>,
  Expect<Equal<ReturnWhatIPassIn<false>, false>>,
  Expect<Equal<ReturnWhatIPassIn<null>, null>>,
];
