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
  GraphQLList,
} from 'graphql';
import GraphQLDate from 'graphql-date';
import ResumeType from './resume';

export default new GraphQLObjectType({
  name: 'Project',
  description: 'project information and demos',
  fields: () => ({
    resume: {
      type: ResumeType,
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'name of the project',
    },
    imageUrl: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'url to an image of the project',
    },
    demoUrl: {
      type: GraphQLString,
      description: 'url to a working demo',
    },
    sourceUrl: {
      type: GraphQLString,
      description: 'url to source code for the project',
    },
    completionDate: {
      type: new GraphQLNonNull(GraphQLDate),
      description: 'eg: September 15, 2007',
    },
    summary: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'brief summary of the project',
    },
    tags: {
      type: new GraphQLList(new GraphQLNonNull(GraphQLString)),
      description: 'technologies used in the project',
    },
  }),
});
