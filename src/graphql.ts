import { createSchema, createYoga } from "graphql-yoga";
import { FastifyBaseLogger, FastifyReply, FastifyRequest } from "fastify";
import { readFileSync } from "fs";
import * as path from "path";
import { resolvers } from "./resolvers";
import { DataService } from "./dataService";

export type Deps = Readonly<{
  logger: FastifyBaseLogger;
  dataService: DataService;
}>;
export const createGraphqlServer = ({ logger, dataService }: Deps) => {
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
      resolvers: resolvers({ logger, dataService })
    }),
    logging: logger
  });
};
