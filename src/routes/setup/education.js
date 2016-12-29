import Education from '../../models/education';
import MongoErrorTransformer from '../../transformers/mongoError';

export default (id) => {
  const education = new Education({
    resumeId: id,
    decription: 'Honours Business Administration and Computer Science, Co-op Option.',
    institution: 'Wilfrid Laurier',
    area: 'Honours Business and Computer Science',
    studyType: 'Bachelor',
    startDate: new Date('August 1, 2008'),
    endDate: new Date('April 30, 2014'),
  });
  education.save((saveError) => {
    if (saveError) return { error: MongoErrorTransformer.transform(saveError) };
    return { message: 'success' };
  });
};
