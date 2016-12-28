import {
  GraphQLID,
  GraphQLNonNull,
} from 'graphql';

import resumeType from '../../types/resume';
import getProjection from '../../get-projection';
import resumeModel from '../../../models/resume';

export default {
  type: resumeType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve(root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);

    return resumeModel
      .findById(params.id)
      .select(projection)
      .exec();
  },
};
