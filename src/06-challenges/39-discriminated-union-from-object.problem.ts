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

const block: BlockTypeToBlockMap = {
  type: "paragraph",
  paragraph: {
    paragraphContent: "123123",
  },
};
