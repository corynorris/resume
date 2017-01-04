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

import educationHistory from '../queries/education/multiple';
import profiles from '../queries/profile/multiple';
import projects from '../queries/project/multiple';
import workHistory from '../queries/work/multiple';

import GraphQLLocationType from './location';

export default new GraphQLObjectType({
  name: 'Resume',
  description: 'general information about a candidate',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'eg: John Smith',
    },
    label: {
      type: GraphQLString,
      description: 'eg: Software Engineer',
    },
    pictureUrl: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'url to a photo of resume ownwer',
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'eg: johnsmith@gmail.com',
    },
    phone: {
      type: GraphQLString,
      description: 'eg: 1-416-123-4567',
    },
    website: {
      type: GraphQLString,
      description: 'eg: https://www.johnsmith.com',
    },
    summary: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'brief outline of goals, experience, skills, etc.',
    },
    location: {
      type: GraphQLLocationType,
    },
    projects,
    profiles,
    workHistory,
    educationHistory,
  }),
});
