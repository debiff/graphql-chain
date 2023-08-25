import { ResolversDependencies } from "../index";
import {
  Resolvers as GqlResolvers,
  Post as GqlPost
} from "../../generated/resolvers-types";
import { toGqlUser } from "../User";
import { createGraphQLError } from "graphql-yoga";

type UserResolver = NonNullable<GqlResolvers["Post"]>["user"];
export const UserResolver: (deps: ResolversDependencies) => UserResolver =
  ({ dataService }) =>
  (parent: GqlPost) => {
    // Simulate data from a database
    const user = dataService.getUsers().find(u => u.id === parent.userId);
    if (!user) {
      throw createGraphQLError(`User ${parent.userId} not found`);
    }
    return toGqlUser(user);
  };
