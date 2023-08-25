import Fastify from "fastify";
import { createGraphqlServer } from "./graphql";
import { DataService } from "./dataService";
const bootstrap = async () => {
  const fastify = Fastify({
    // Integrate Fastify logger
    logger: true
  });

  const logger = fastify.log;

  const dataService = new DataService();

  const graphQLServer = createGraphqlServer({ logger, dataService });

  fastify.route({
    url: graphQLServer.graphqlEndpoint,
    method: ["GET", "POST", "OPTIONS"],
    handler: async (req, reply) => {
      // Second parameter adds Fastify's `req` and `reply` to the GraphQL Context
      const response = await graphQLServer.handleNodeRequest(req, {
        req,
        reply
      });
      response.headers.forEach(
        (value, key) => reply.header(key, value) as unknown
      );
      return reply.status(response.status).send(response.body);
    }
  });

  return fastify.listen(4000);
};

bootstrap().then(console.info).catch(console.error);
