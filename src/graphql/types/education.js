// "education": [
//   {
//     "institution": "University",
//     "area": "Software Development",
//     "studyType": "Bachelor",
//     "startDate": "2011-01-01",
//     "endDate": "2013-01-01",
//   }
// ],

import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
} from 'graphql';

import GraphQLDate from 'graphql-date';

export default new GraphQLObjectType({
  name: 'Education',
  description: 'information on an academic institution',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    resumeId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    institution: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'University of Toronto',
    },
    area: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Computer Science',
    },
    studyType: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Bachelor',
    },
    startDate: {
      type: new GraphQLNonNull(GraphQLDate),
      description: 'August 1, 2000',
    },
    endDate: {
      type: new GraphQLNonNull(GraphQLDate),
      description: 'April 30, 2004',
    },
  },
});
