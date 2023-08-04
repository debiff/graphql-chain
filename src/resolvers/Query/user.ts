import { ResolversDependencies } from "../index";
import { Resolvers as GqlResolvers } from "../../generated/resolvers-types";
import { toGqlUser } from "../User";
import { Users } from "../../../data/Users";

export const UserResolver: (
  deps: ResolversDependencies
) => NonNullable<GqlResolvers["Query"]["user"]> =
  deps =>
  (parent, { userId }) => {
    // Simulate data from a database
    const user = Users.find(u => u.id === userId);

    return toGqlUser(user);
  };
