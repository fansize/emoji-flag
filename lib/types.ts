export type Emoji = {
  id: number;
  code_point: number[];
  type_field: string;
  description: string;
  comments: string;
};

export type Post = {
  id: string;
  title: string;
};
