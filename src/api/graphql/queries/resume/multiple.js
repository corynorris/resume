import {
  GraphQLList,
} from 'graphql';

import ResumeType from '../../types/resume';
import getProjection from '../../get-projection';
import resumeModel from '../../../models/resume';

export default {
  type: new GraphQLList(ResumeType),
  description: 'Gets all resumes in the database',
  resolve(root, params, options, ast) {
    const projection = getProjection(ast);
    return resumeModel
      .find()
      .select(projection)
      .exec();
  },
};
