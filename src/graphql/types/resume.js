// "basics": {
//   "name": "Cory Norris",
//   "label": "Programmer",
//   "picture": "",
//   "email": "corynorris@gmail.com",
//   "phone": "(912) 555-4321",
//   "website": "http://johndoe.com",
//   "summary": "A summary of John Doe...",
//   "location": {
//     "address": "2712 Broadway St",
//     "postalCode": "CA 94115",
//     "city": "San Francisco",
//     "countryCode": "US",
//     "region": "California"
//   },
// },

import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
} from 'graphql';

import GraphQLLocationType from './location';

export default new GraphQLObjectType({
  name: 'Resume',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    label: {
      type: GraphQLString,
    },
    picture: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    phone: {
      type: GraphQLString,
    },
    website: {
      type: GraphQLString,
    },
    summary: {
      type: new GraphQLNonNull(GraphQLString),
    },
    location: {
      type: GraphQLLocationType,
    },
  },
});
