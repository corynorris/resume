import Project from '../../models/project';
import MongoErrorTransformer from '../../transformers/mongoError';

export default (id) => {
  const project = new Project({
    resumeId: id,
    imageUrl: 'test',
    demoUrl: 'test',
    sourceUrl: 'test',
    completionDate: new Date('August 1, 2003'),
    summary: 'test',
    tags: ['react', 'graphql'],
  });
  return project.save();
};
