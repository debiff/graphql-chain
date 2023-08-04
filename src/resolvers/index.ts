import { Resolvers } from "../generated/resolvers-types";
import { PostResolver } from "./Post";
import { FastifyBaseLogger } from "fastify";
import { QueryResolver } from "./Query";

export type ResolversDependencies = Readonly<{
  logger: FastifyBaseLogger;
}>;

export const resolvers: (
  deps: ResolversDependencies
) => NonNullable<Resolvers> = deps => ({
  Post: PostResolver(deps),
  Query: QueryResolver(deps)
});
