import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';

import queries from './queries';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Root',
    fields: queries,
  }),
});
