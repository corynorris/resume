import Work from '../../models/work';
import MongoErrorTransformer from '../../transformers/mongoError';

export default (id) => {
  const work = new Work({
    resumeId: id,
    company: 'Honours Business Administration and Computer Science, Co-op Option.',
    position: '',
    website: '',
    startDate: '',
    endDate: '',
    highlights: [''],
    location: {
      city: '',
      region: '',
    },
  });
  work.save((saveError) => {
    if (saveError) return { error: MongoErrorTransformer.transform(saveError) };
    return { message: 'success' };
  });
};
