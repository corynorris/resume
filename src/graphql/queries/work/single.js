import {
  GraphQLID,
  GraphQLNonNull,
} from 'graphql';

import workType from '../../types/work';
import getProjection from '../../get-projection';
import workModel from '../../../models/work';

export default {
  type: workType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve(root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);

    return workModel
      .findById(params.id)
      .select(projection)
      .exec();
  },
};
