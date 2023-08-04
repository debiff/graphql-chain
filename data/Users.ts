export type User = {
  id: number;
  username: string;
  email: string;
};

// A Json list of users
export const Users: ReadonlyArray<User> = [
  {
    id: 1,
    username: "user1",
    email: "user1@test.it"
  },
  {
    id: 2,
    username: "user2",
    email: "user2@test.it"
  }
];
