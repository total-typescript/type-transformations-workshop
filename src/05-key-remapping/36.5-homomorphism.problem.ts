import { Equal, Expect } from "../helpers/type-utils";

type DistributiveOmit<T, KeyToOmit extends PropertyKey> = {
  [K in keyof T]: T[K];
};

export type Event =
  | {
      type: "login";
      username: string;
      password: string;
      timestamp: number;
    }
  | {
      type: "login-with-email";
      email: string;
      timestamp: number;
    };

type EventWithoutTimestamp = DistributiveOmit<Event, "timestamp">;

type test = Expect<
  Equal<
    EventWithoutTimestamp,
    | {
        type: "login";
        username: string;
        password: string;
      }
    | {
        type: "login-with-email";
        email: string;
      }
  >
>;
