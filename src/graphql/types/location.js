
import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'location',
  fields: {
    address: {
      type: new GraphQLNonNull(GraphQLString),
    },
    postalCode: {
      type: new GraphQLNonNull(GraphQLString),
    },
    city: {
      type: new GraphQLNonNull(GraphQLString),
    },
    countryCode: {
      type: new GraphQLNonNull(GraphQLString),
    },
    region: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});
