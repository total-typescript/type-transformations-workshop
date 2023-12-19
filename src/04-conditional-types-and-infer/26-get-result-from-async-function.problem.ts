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

// TODO: implement InferPropsFromServerSideFunction
// InferPropsFromServerSideFunction should infer the props type from
// getServerSideProps's return type
type InferPropsFromServerSideFunction = unknown;

type tests = [
  Expect<
    Equal<
      InferPropsFromServerSideFunction<typeof getServerSideProps>,
      { json: { title: string } }
    >
  >,
];
