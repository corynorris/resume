
import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'location',
  description: 'a full address',
  fields: () => ({
    address: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'eg: APT 1, 123 fakestreet',
    },
    postalCode: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'eg: A1B 2C3',
    },
    city: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'eg: Toronto',
    },
    countryCode: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'eg: CA',
    },
    region: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'eg: Ontario',
    },
  }),
});
