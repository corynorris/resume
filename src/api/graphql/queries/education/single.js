import {
  GraphQLID,
  GraphQLNonNull,
} from 'graphql';

import educationType from '../../types/education';
import getProjection from '../../get-projection';
import educationModel from '../../../models/education';

export default {
  type: educationType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve(root, params, options, ast) {
    const projection = getProjection(ast);

    return educationModel
      .findById(params.id)
      .select(projection)
      .exec();
  },
};
