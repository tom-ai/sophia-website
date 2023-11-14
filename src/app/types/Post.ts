export type Post = {
  id: number;
  attributes: {
    date: Date;
    message: string;
    embed: string;
  };
};
