import { Equal, Expect } from "../helpers/type-utils";

// TODO: implement ReturnWhatIPassIn
// reference: https://www.typescriptlang.org/docs/handbook/2/generics.html
type ReturnWhatIPassIn = unknown;

type tests = [
  Expect<Equal<ReturnWhatIPassIn<1>, 1>>,
  Expect<Equal<ReturnWhatIPassIn<"1">, "1">>,
  Expect<Equal<ReturnWhatIPassIn<true>, true>>,
  Expect<Equal<ReturnWhatIPassIn<false>, false>>,
  Expect<Equal<ReturnWhatIPassIn<null>, null>>,
];
