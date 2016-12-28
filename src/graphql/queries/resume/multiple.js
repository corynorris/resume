import {
  GraphQLList
} from 'graphql';

import resumeType from '../../types/resume';
import getProjection from '../../get-projection';
import resumeModel from '../../../models/resume';

export default {
  type: new GraphQLList(resumeType),
  args: {},
  resolve(root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);

    return resumeModel
      .find()
      .select(projection)
      .exec();
  },
};
