import Resume from '../../models/resume';

export default () => {
  const resume = new Resume({
    name: 'Cory Norris',
    label: 'Software Engineer',
    pictureUrl: 'https://images.corynorris.me/profile/formal.jpg',
    email: 'corynorris@gmail.com',
    phone: '647-573-8532',
    website: 'https://corynorris.me',
    summary: ' am continuously learning by building fun projects. I\'m enamored by the fact that I can create anything I can imagine through code. I\'d like to build tools that help people do or experience things that would otherwise be impossible.',
    location: {
      address: '33 Orchard View Blvd',
      postalCode: 'M4R 2E9',
      city: 'Toronto',
      countryCode: 'CA',
      region: 'Ontario',
    },
  });
  return resume.save();
};
