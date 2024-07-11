import { Equal, Expect } from "../helpers/type-utils";

type DistributiveOmit<T, K extends PropertyKey> = T extends any
  ? Omit<T, K>
  : never;

export type Event =
  | {
      type: "login"; // Semi in-common
      username: string;
      password: string;
      timestamp: number; // In common
    }
  | {
      type: "login-with-email"; // Semi in-common
      email: string;
      timestamp: number; // In common
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
