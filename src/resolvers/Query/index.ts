import { ResolversDependencies } from "../index";
import { Resolvers as GqlResolvers } from "../../generated/resolvers-types";
import { PostResolver } from "./post";
import { UserResolver } from "./user";

export const QueryResolver: (
  deps: ResolversDependencies
) => NonNullable<GqlResolvers["Query"]> = deps => ({
  post: PostResolver(deps),
  user: UserResolver(deps)
});
