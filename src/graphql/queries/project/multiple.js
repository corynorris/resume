import {
  GraphQLList,
} from 'graphql';

import getProjection from '../../get-projection';
import projectType from '../../types/project';
import projectModel from '../../../models/project';

export default {
  type: new GraphQLList(projectType),
  args: {},
  resolve(root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);

    return projectModel
      .find()
      .select(projection)
      .exec();
  },
};
