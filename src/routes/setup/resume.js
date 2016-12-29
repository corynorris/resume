import Resume from '../../models/resume';

export default () => {
  const resume = new Resume({
    name: 'Cory Norris',
    label: 'Software Engineer',
    pictureUrl: 'test',
    email: 'test',
    phone: 'test',
    website: 'https://corynorris.me',
    summary: 'test',
    location: {
      address: 'test',
      postalCode: 'test',
      city: 'Toronto',
      countryCode: 'CA',
      region: 'Ontario',
    },
  });
  return resume.save();
};
