import {
  GraphQLID,
  GraphQLNonNull,
} from 'graphql';

import ResumeType from '../../types/resume';
import getProjection from '../../get-projection';
import resumeModel from '../../../models/resume';

export default {
  type: ResumeType,
  description: 'Gets a single database by id from the database',
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve(root, params, options, ast) {
    const projection = getProjection(ast);
    return resumeModel
      .findById(params.id)
      .select(projection)
      .exec();
  },
};
