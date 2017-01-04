import Profile from '../../models/profile';

export default (id) => {
  const data = [{
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
  }];

  return Promise.all(data.map(profileData => new Promise((resolve, reject) => {
    Profile.update(
      profileData,
      { $setOnInsert: profileData },
      { upsert: true },
      (err, profile) => {
        if (err) reject(err);
        resolve(profile);
      });
  })));
};
