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
  description: 'general information about a candidate',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'John Smith',
    },
    label: {
      type: GraphQLString,
      description: 'Software Engineer',
    },
    pictureUrl: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'url to a photo of resume ownwer',
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'johnsmith@gmail.com',
    },
    phone: {
      type: GraphQLString,
      description: '1-416-123-4567',
    },
    website: {
      type: GraphQLString,
      description: 'https://www.johnsmith.com',
    },
    summary: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'brief outline of goals, experience, skills, etc.',
    },
    location: {
      type: GraphQLLocationType,
    },
  },
});
