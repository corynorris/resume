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
} from 'graphql';

import GraphQLDate from 'graphql-date';

export default new GraphQLObjectType({
  name: 'Education',
  description: 'information on an academic institution',
  fields: () => ({
    institution: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'eg: University of Toronto',
    },
    area: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'eg: Computer Science',
    },
    studyType: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'eg: Bachelor',
    },
    startDate: {
      type: new GraphQLNonNull(GraphQLDate),
      description: 'eg: August 1, 2000',
    },
    endDate: {
      type: new GraphQLNonNull(GraphQLDate),
      description: 'eg: April 30, 2004',
    },
  }),
});
