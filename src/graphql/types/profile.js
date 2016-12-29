// "profiles": [
//       {
//         "network": "CodePen",
//         "username": "corynorris",
//         "url": "https://codepen.io/corynorris/"
//       }
//     ]

import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Profile',
  description: 'other portfolios or accounts',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    resumeId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    network: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'github',
    },
    username: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'johnsmith',
    },
    url: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'https://github.com/johnsmith',
    },
  },
});
