import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';
import { schema as commonSchema, resolvers as commonResolver } from './common';

const typeDefs = [
  commonSchema,
];

const resolvers = merge(
  commonResolver,
);

// Combine type defs
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;