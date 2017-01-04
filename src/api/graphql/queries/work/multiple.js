import {
  GraphQLList,
  GraphQLInt,
} from 'graphql';

import workType from '../../types/work';
import getProjection from '../../get-projection';
import workModel from '../../../models/work';

export default {
  type: new GraphQLList(workType),
  args: {
    limit: {
      name: 'limit',
      type: GraphQLInt,
    },
  },
  resolve(root, params, options, ast) {
    const projection = getProjection(ast);

    return workModel
      .find({ resumeId: root.id })
      .sort({ startDate: -1 })
      .limit(params.limit)
      .select(projection)
      .exec();
  },
};
