import { Equal, Expect } from "../helpers/type-utils";

type User = {
  readonly id: string;
  name: string;
  phone?: string;
  email: string;
};

type UserWithoutEmail = {
  [K in keyof User as K extends "email" ? never : K]: User[K];
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
