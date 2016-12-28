// "work": [
//     {
//       "name": "Company",
//       "imageUrl": "President",
//       "demoUrl": "http://company.com",
//       "sourceUrl": "http://company.com",
//       "completionDate": "2013-01-01",
//       "summary": "Description...",
//       "tags": [
//         "Started the company"
//       ]
//     }
//   ],

import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID
} from 'graphql';
import GraphQLDate from 'graphql-date';

export default new GraphQLObjectType({
  name: 'Project',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    resumeId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    imageUrl: {
      type: new GraphQLNonNull(GraphQLString),
    },
    demoUrl: {
      type: new GraphQLNonNull(GraphQLString),
    },
    sourceUrl: {
      type: GraphQLString,
    },
    completionDate: {
      type: GraphQLNonNull(GraphQLDate),
    },
    summary: {
      type: new GraphQLNonNull(GraphQLString),
    },
    tags: [{
      type: new GraphQLNonNull(GraphQLString),
    }],
  },
});
