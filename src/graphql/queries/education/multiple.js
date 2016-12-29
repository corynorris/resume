import {
  GraphQLList,
} from 'graphql';

import getProjection from '../../get-projection';
import educationType from '../../types/education';
import educationModel from '../../../models/education';

export default {
  type: new GraphQLList(educationType),
  args: {},
  resolve(root, params, options, ast) {
    const projection = getProjection(ast);

    return educationModel
      .find()
      .select(projection)
      .exec();
  },
};
