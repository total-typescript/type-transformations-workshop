import { Equal, Expect } from "../helpers/type-utils";

type User = {
  readonly id: string;
  name: string;
  phone?: string;
  email: string;
};

type UserWithoutEmail = {
  [K in Exclude<keyof User, "email">]: User[K];
};

type test = Expect<
  Equal<
    UserWithoutEmail,
    {
      readonly id: string;
      name: string;
      phone?: string;
    }
  >
>;
