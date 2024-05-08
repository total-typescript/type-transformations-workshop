import { Equal, Expect } from "../helpers/type-utils";

type User = {
  readonly id: string;
  name: string;
  phone?: string;
  email: string;
};

type UserWithoutEmail = Omit<User, "email">;

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
