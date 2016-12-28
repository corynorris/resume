import {
  GraphQLList,
} from 'graphql';

import workType from '../../types/work';
import getProjection from '../../get-projection';
import workModel from '../../../models/work';

export default {
  type: new GraphQLList(workType),
  args: {},
  resolve(root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);

    return workModel
      .find()
      .select(projection)
      .exec();
  },
};
