import {
  GraphQLID,
  GraphQLNonNull,
} from 'graphql';

import getProjection from '../../get-projection';
import profileType from '../../types/profile';
import profileModel from '../../../models/profile';

export default {
  type: profileType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve(root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);

    return profileModel
      .findById(params.id)
      .select(projection)
      .exec();
  },
};
