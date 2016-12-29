
import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'location',
  description: 'a full address',
  fields: {
    address: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'APT 1, 123 fakestreet',
    },
    postalCode: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'A1B 2C3',
    },
    city: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Toronto',
    },
    countryCode: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'CA',
    },
    region: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Ontario',
    },
  },
});
