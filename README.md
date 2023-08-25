# GraphQL-Chain - Example project

This is the example project for the [GraphQL-Chain]() article.

## Installation

```bash
 yarn install
```

## Usage

```bash
 yarn start:dev
```

If you want to add other resources or fields first of all add it 
to the `./schema.graphql` file and then run the following command:

```bash
 yarn generate:graphql
```
This will generate the `./src/generated/graphql.ts` file with the new types
to use in the resolvers.

## Project structure

- `./schema.graphql` - Contains the GraphQL schema of the project.
- `./data` - Contains the mocked data used in the example.
- `./src/generated` - Contains the generated code from the `./schema.graphql` file with `graphql-codegen`.
- `./src/index.ts` - The entry point of the project. Here is where the `Fastify server`, 
the `logger`, the `Data service` and the `GraphQL server` are instatiated.
- `./src/graphql.ts` - Contains the `createGraphqlServer` function. This function is in charge of loading the schema GraphQL and creating the `GraphQL server`.
- `./src/resolvers` - Contains the resolvers of the project. Each `index.ts` file (e.g. `.src/resolvers/Post/index.ts`) contains the `toGqlResource` function (e.g in this case `toGqlPost`)
that translate the `Data service` resource into the `GraphQL` resource.