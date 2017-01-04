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
  GraphQLList,
} from 'graphql';
import GraphQLDate from 'graphql-date';
import GraphQLLocationType from './location';

export default new GraphQLObjectType({
  name: 'Work',
  description: 'previous employment information',
  fields: {
    company: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'eg: Google',
    },
    position: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'eg: Software Engineer',
    },
    website: {
      type: GraphQLString,
      description: 'eg: https://www.google.com',
    },
    startDate: {
      type: new GraphQLNonNull(GraphQLDate),
      description: 'eg: August 1, 2004',
    },
    endDate: {
      type: GraphQLDate,
      description: 'eg: Jan 1, 2012',
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
