export type Collaborator = {
  id: string;
  name: string;
  slug: string;
};

export type Post = {
  id: string;
  date: string;
  message: string;
  link: string;
  collaborators: Collaborator[];
};
