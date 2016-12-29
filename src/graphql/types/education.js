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
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    resumeId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    institution: {
      type: new GraphQLNonNull(GraphQLString),
    },
    area: {
      type: new GraphQLNonNull(GraphQLString),
    },
    studyType: {
      type: new GraphQLNonNull(GraphQLString),
    },
    startDate: {
      type: new GraphQLNonNull(GraphQLDate),
    },
    endDate: {
      type: new GraphQLNonNull(GraphQLDate),
    },
  },
});
