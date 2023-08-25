import { ResolversDependencies } from "../index";
import {
  Post as GqlPost,
  User as GqlUser,
  Resolvers as GqlResolvers
} from "../../generated/resolvers-types";
import { Post } from "../../../data/Posts";
import { UserResolver } from "./user";

export const toGqlPost = ({
  id,
  title,
  publication_date,
  userId,
  body
}: Post): GqlPost => ({
  __typename: "Post" as const,
  id: id.toString(),
  title,
  published: publication_date !== null,
  publication_date: publication_date !== null ? publication_date : undefined,
  body,
  userId,
  author: null as unknown as GqlUser
});
export const PostResolver: (
  deps: ResolversDependencies
) => NonNullable<GqlResolvers["Post"]> = deps => ({
  author: UserResolver(deps)
});
