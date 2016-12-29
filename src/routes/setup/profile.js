import Profile from '../../models/profile';
import MongoErrorTransformer from '../../transformers/mongoError';

export default (id) => {
  Profile.collection.insert([{
    resumeId: id,
    network: 'github',
    username: 'corynorris',
    url: 'https://github.com/corynorris',
  }, {
    resumeId: id,
    network: 'codepen',
    username: 'corynorris',
    url: 'https://codepen.io/corynorris/',
  }, {
    resumeId: id,
    network: 'stackoverflow',
    username: 'corynorris',
    url: 'http://stackoverflow.com/users/1224838/cory',
  }, {
    resumeId: id,
    network: 'bitbucket',
    username: 'corynorris',
    url: 'https://bitbucket.org/corynorris/',
  }], (saveError) => {
    if (saveError) return { error: MongoErrorTransformer.transform(saveError) };
    return { message: 'success' };
  });
};
