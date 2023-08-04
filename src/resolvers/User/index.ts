import { User as GqlUser } from "../../generated/resolvers-types";
import { User } from "../../../data/Users";
export const toGqlUser = ({ id, username, email }: User): GqlUser => ({
  __typename: "User" as const,
  id: id.toString(),
  username,
  email
});
