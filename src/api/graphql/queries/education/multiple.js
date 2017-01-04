import {
  GraphQLList,
  GraphQLInt,
} from 'graphql';

import getProjection from '../../get-projection';
import educationType from '../../types/education';
import educationModel from '../../../models/education';

export default {
  type: new GraphQLList(educationType),
  args: {
    limit: {
      name: 'limit',
      type: GraphQLInt,
    },
  },
  resolve(root, params, options, ast) {
    const projection = getProjection(ast);

    return educationModel
      .find()
      .sort({ startDate: -1 })
      .limit(params.limit)
      .select(projection)
      .exec();
  },
};
