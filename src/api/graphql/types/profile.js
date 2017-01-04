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
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Profile',
  description: 'other portfolios or accounts',
  fields: () => ({
    network: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'eg: github',
    },
    username: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'eg: johnsmith',
    },
    url: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'eg: https://github.com/johnsmith',
    },
  }),
});
