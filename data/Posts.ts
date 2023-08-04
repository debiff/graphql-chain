// A Json list of posts

export type Post = {
  id: number;
  title: string;
  body: string;
  publication_date: string;
  userId: number;
};
export const Posts: ReadonlyArray<Post> = [
  {
    id: 1,
    title: "Post 1",
    body: "Post 1 body",
    publication_date: "2021-01-01",
    userId: 1
  },
  {
    id: 2,
    title: "Post 2",
    body: "Post 2 body",
    publication_date: "2021-01-02",
    userId: 1
  },
  {
    id: 3,
    title: "Post 3",
    body: "Post 3 body",
    publication_date: "2021-01-03",
    userId: 2
  },
  {
    id: 4,
    title: "Post 4",
    body: "Post 4 body",
    publication_date: "2021-01-04",
    userId: 2
  }
];
