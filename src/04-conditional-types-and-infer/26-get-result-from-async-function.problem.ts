import { Equal, Expect } from "../helpers/type-utils";

const getServerSideProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json: { title: string } = await data.json();
  return {
    props: {
      json,
    },
  };
};

/**
 * Here is a powerful example, of how to extract types from a function that we might not control, so instead of copying the structure of
 * the object we want to extract, we can instead use this sort of helper type!
 */
type InferPropsFromServerSideFunction<T> = T extends (...args: any) => Promise<{ props: infer PROPS }>
  ? PROPS
  : never;

/** Example usage: */
const serverSideData = await getServerSideProps();
const props: InferPropsFromServerSideFunction<typeof getServerSideProps> = serverSideData.props;
/** Why not just let TS infer it by itself? */
const props2 = serverSideData.props;

type tests = [
  Expect<
    Equal<
      InferPropsFromServerSideFunction<typeof getServerSideProps>,
      { json: { title: string } }
    >
  >,
  Expect<
    Equal<
      typeof props2,
      { json: { title: string } }
    >
  >,
  Expect<
    Equal<
      typeof props,
      { json: { title: string } }
    >
  >
];
