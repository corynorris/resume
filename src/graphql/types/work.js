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
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    resumeId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    company: {
      type: new GraphQLNonNull(GraphQLString),
    },
    position: {
      type: new GraphQLNonNull(GraphQLString),
    },
    website: {
      type: new GraphQLNonNull(GraphQLString),
    },
    startDate: {
      type: new GraphQLNonNull(GraphQLDate),
    },
    endDate: {
      type: new GraphQLNonNull(GraphQLDate),
    },
    highlights: {
      type: new GraphQLList(new GraphQLNonNull(GraphQLString)),
    },
    location: {
      type: GraphQLLocationType,
    },
  },
});
