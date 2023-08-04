import { ResolversDependencies } from "../index";
import {
  Resolvers as GqlResolvers,
  Post as GqlPost
} from "../../generated/resolvers-types";
import { Users } from "../../../data/Users";
import { toGqlUser } from "../User";
import { createGraphQLError } from "graphql-yoga";

type UserResolver = NonNullable<GqlResolvers["Post"]["user"]>;
export const UserResolver: (deps: ResolversDependencies) => UserResolver =
  deps => (parent: GqlPost) => {
    // Simulate data from a database
    const user = Users.find(u => u.id === parent.userId);
    if (!user) {
      throw createGraphQLError(`User ${parent.userId} not found`);
    }
    return toGqlUser(user);
  };
