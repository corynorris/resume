import Project from '../../models/project';
import MongoErrorTransformer from '../../transformers/mongoError';

export default (id) => {
  const project = new Project({
    resumeId: id,
    imageUrl: 'Honours Business Administration and Computer Science, Co-op Option.',
    demoUrl: '',
    sourceUrl: '',
    completionDate: '',
    summary: '',
    tags: [],
  });
  project.save((saveError) => {
    if (saveError) return { error: MongoErrorTransformer.transform(saveError) };
    return { message: 'success' };
  });
};
