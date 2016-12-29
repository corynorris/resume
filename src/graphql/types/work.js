// "work": [
//     {
//       "company": "Company",
//       "position": "President",
//       "website": "http://company.com",
//       "startDate": "2013-01-01",
//       "endDate": "2014-01-01",
//       "summary": "Description...",
//       "highlights": [
//         "Started the company"
//       ]
//     }
//   ],

import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} from 'graphql';
import GraphQLDate from 'graphql-date';
import GraphQLLocationType from './location';

export default new GraphQLObjectType({
  name: 'Work',
  description: 'previous employment information',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    resumeId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    company: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Google',
    },
    position: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Software Engineer',
    },
    website: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'https://www.google.com',
    },
    startDate: {
      type: new GraphQLNonNull(GraphQLDate),
      description: 'August 1, 2004',
    },
    endDate: {
      type: new GraphQLNonNull(GraphQLDate),
      description: 'Jan 1, 2012',
    },
    highlights: {
      type: new GraphQLList(new GraphQLNonNull(GraphQLString)),
      description: 'outline of accomplishments during this term of employment',
    },
    location: {
      type: GraphQLLocationType,
    },
  },
});
