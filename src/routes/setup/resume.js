import Resume from '../../models/resume';
import MongoErrorTransformer from '../../transformers/mongoError';

export default () => {
  const resume = new Resume({
    name: 'Honours Business Administration and Computer Science, Co-op Option.',
    label: '',
    pictureUrl: '',
    email: '',
    phone: '',
    website: '',
    summary: '',
    location: {
      address: '',
      postalCode: '',
      city: '',
      countryCode: '',
      region: '',
    },
  });
  resume.save((saveError, savedResume) => {
    if (saveError) return { error: MongoErrorTransformer.transform(saveError) };
    return { message: 'success', id: savedResume.id };
  });
};
