import {
  GraphQLID,
  GraphQLNonNull,
} from 'graphql';

import getProjection from '../../get-projection';
import projectType from '../../types/project';
import projectModel from '../../../models/project';

export default {
  type: projectType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve(root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);

    return projectModel
      .findById(params.id)
      .select(projection)
      .exec();
  },
};
