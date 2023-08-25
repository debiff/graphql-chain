import { ResolversDependencies } from "../index";
import { Resolvers as GqlResolvers } from "../../generated/resolvers-types";
import { toGqlUser } from "../User";
import { createGraphQLError } from "graphql-yoga";

export const UserResolver: (
  deps: ResolversDependencies
) => NonNullable<GqlResolvers["Query"]>["user"] =
  ({ dataService }) =>
  (_, { userId }) => {
    // Simulate data from a database
    const user = dataService.getUsers().find(u => u.id === userId);

    if (!user) {
      throw createGraphQLError(`User ${userId} not found`);
    }

    return toGqlUser(user);
  };
