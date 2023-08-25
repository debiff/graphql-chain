import { Post, Posts } from "../data/Posts";
import { User, Users } from "../data/Users";

export class DataService {
  public getPosts(): ReadonlyArray<Post> {
    return Posts;
  }

  public getUsers(): ReadonlyArray<User> {
    return Users;
  }
}
