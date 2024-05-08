import { Equal, Expect } from "../helpers/type-utils";

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

type EventWithoutTimestamp = Omit<Event, "timestamp">;

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
