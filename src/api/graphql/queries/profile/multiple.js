import {
  GraphQLList,
} from 'graphql';

import getProjection from '../../get-projection';
import profileType from '../../types/profile';
import profileModel from '../../../models/profile';

export default {
  type: new GraphQLList(profileType),
  args: {},
  resolve(root, params, options, ast) {
    const projection = getProjection(ast);

    return profileModel
      .find()
      .select(projection)
      .exec();
  },
};
