import schema from './schema.graphql';

const resolvers = {
  Query: {
    version: () => '0.0.1'
  },
};

export { resolvers, schema };