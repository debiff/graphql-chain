import { ResolversDependencies } from "../index";
import { Resolvers as GqlResolvers } from "../../generated/resolvers-types";
import { toGqlPost } from "../Post";
import { createGraphQLError } from "graphql-yoga";

export const PostResolver: (
  deps: ResolversDependencies
) => NonNullable<GqlResolvers["Query"]>["post"] =
  ({ dataService }) =>
  (_, { postId }) => {
    // Simulate data from a database
    const post = dataService.getPosts().find(p => p.id === postId);

    if (!post) {
      throw createGraphQLError(`Post ${postId} not found`);
    }

    return toGqlPost(post);
  };
