import Work from '../../models/work';
import MongoErrorTransformer from '../../transformers/mongoError';

export default (id) => {
  const work = new Work({
    resumeId: id,
    company: 'Index Exchange',
    position: 'Software Engineer',
    website: 'http://www.indexexchange.com/',
    startDate: new Date('March 28, 2016'),
    highlights: ['Led client communications for a team of software engineers, and oversaw all work, leading to more than 20 million new impressions.',
      'Provided technical consulting to several of the top 100 websites in North America directly helping the company add more revenue this year than they made the previous year.',
      'Helped refine the video product offering and guide product development.',
      'Setup best practices and automation to move the company\'s core product from a fully custom solution to completely self-serve.',
      'Sat in a panel alongside the CEO and VPs at Index’s 2016 Hackathon, mentoring students on all things NodeJS & React.'],
    location: {
      city: 'Toronto',
      region: 'Ontario',
    },
  });
  return work.save();
};
