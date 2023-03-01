import { Equal, Expect } from "../helpers/type-utils";

type TemplateLiteralKey = `${"user" | "post" | "comment"}${"Id" | "Name"}`;

/**
 * Here we use all the possibilities of the above template literal as key of an object and assign each key to be a type of string.
 * This is done with the utility type "Record". Not that in Record, you cannot assign different type to different keys. In this case,
 * they all will receive a type of string.
 */
type ObjectOfKeys = Record<TemplateLiteralKey, string>;

type tests = [
  Expect<
    Equal<
      ObjectOfKeys,
      {
        userId: string;
        userName: string;
        postId: string;
        postName: string;
        commentId: string;
        commentName: string;
      }
    >
  >,
];
