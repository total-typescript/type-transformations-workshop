interface BlockTypeToBlockContent {
  heading_2: {
    content: string;
  };
  heading_3: {
    content: string;
  };
  paragraph: {
    paragraphContent: string;
  };
}

type BlockTypeToBlockMap = {
  [T in keyof BlockTypeToBlockContent]: {
    type: T;
  } & Record<T, BlockTypeToBlockContent[T]>;
}[keyof BlockTypeToBlockContent];

type NewObj = {
  a: {
    a: 1;
  };
  b: {
    b: 2;
  };
  c: {
    c: 3;
  };
}["a" | "b" | "c"];

const block: BlockTypeToBlockMap = {
  type: "paragraph",
  paragraph: {
    paragraphContent: "123123",
  },
};
