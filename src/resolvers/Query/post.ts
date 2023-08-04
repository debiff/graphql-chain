import { ResolversDependencies } from "../index";
import { Resolvers as GqlResolvers } from "../../generated/resolvers-types";
import { Posts } from "../../../data/Posts";
import { toGqlPost } from "../Post";
import { createGraphQLError } from "graphql-yoga/typings";

export const PostResolver: (
  deps: ResolversDependencies
) => NonNullable<GqlResolvers["Query"]["post"]> =
  deps =>
  (_, { postId }) => {
    // Simulate data from a database
    const post = Posts.find(p => p.id === postId);

    if (!post) {
      throw createGraphQLError(`Post ${postId} not found`);
    }

    return toGqlPost(post);
  };
