import {
  GraphQLList,
} from 'graphql';

import getProjection from '../../get-projection';
import projectType from '../../types/project';
import projectModel from '../../../models/project';

export default {
  type: new GraphQLList(projectType),
  args: {},
  resolve(root, params, options, ast) {
    const projection = getProjection(ast);

    return projectModel
      .find()
      .select(projection)
      .exec();
  },
};
