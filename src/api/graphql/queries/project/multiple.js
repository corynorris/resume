import {
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import getProjection from '../../get-projection';
import projectType from '../../types/project';
import projectModel from '../../../models/project';

export default {
  type: new GraphQLList(projectType),
  args: {
    limit: {
      name: 'limit',
      type: GraphQLInt,
    },
    tag: {
      name: 'tag',
      type: GraphQLString,
    },
  },
  resolve(root, params, options, ast) {
    const projection = getProjection(ast);
    const searchParams = { resumeId: root.id };
    if (params.tag) {
      searchParams.tags = params.tag;
    }
    return projectModel
      .find(searchParams)
      .sort({ completionDate: -1 })
      .limit(params.limit)
      .select(projection)
      .exec();
  },
};
