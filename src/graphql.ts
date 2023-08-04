import { createSchema, createYoga } from "graphql-yoga";
import { FastifyBaseLogger, FastifyReply, FastifyRequest } from "fastify";
import { readFileSync } from "fs";
import * as path from "path";
import { resolvers } from "./resolvers";

export type Deps = Readonly<{
  logger: FastifyBaseLogger;
}>;
export const createGraphqlServer = ({ logger }: Deps) => {
  const typeDefs = readFileSync(
    path.resolve(__dirname, "..", "schema.graphql"),
    "utf8"
  );
  return createYoga<
    Readonly<{
      req: FastifyRequest;
      reply: FastifyReply;
    }>
  >({
    schema: createSchema({
      typeDefs,
      resolvers: resolvers({ logger })
    }),
    logging: logger
  });
};
