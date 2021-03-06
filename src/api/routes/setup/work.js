import Work from '../../models/work';

export default (id) => {
  const data = [{
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
  }, {
    resumeId: id,
    company: 'Busan Global Village',
    position: 'English Teacher',
    website: 'https://www.bgv.co.kr',
    startDate: new Date('November 1, 2014'),
    endDate: new Date('November 30, 2015'),
    highlights: ['Won best teacher out of the 20+ teaching staff for my outstanding lesson plans and enthusiasm.',
      'Helped run the largest English camp in Busan with hundreds of students.'],
    location: {
      city: 'Busan',
      region: 'Korea',
    },
  }, {
    resumeId: id,
    company: 'Babcock & Wilcox Canada, Ltd',
    position: 'Project Manager',
    website: 'http://www.babcock.com/',
    startDate: new Date('May 1, 2012'),
    endDate: new Date('August 31, 2012'),
    highlights: ['Leveraged SharePoint to coordinate project managers and improve interoffice communication and productivity.',
      'Improved the workflow and tooling for employees nuclear dosage monitoring.'],
    location: {
      city: 'Cambridge',
      region: 'Ontario',
    },
  }, {
    resumeId: id,
    company: 'Suncor Energy',
    position: 'Retail Programs Intern',
    website: 'http://www.suncor.com/',
    startDate: new Date('September 1, 2011'),
    endDate: new Date('December 31, 2011'),
    highlights: ['Assisted in organizing and creating material for a national conference for all franchisees within the PetroCanada Network.',
      'Coordinated retail specialist across multiple east coast territories.',
      'Chaired and facilitated meetings and teleconferences.'],
    location: {
      city: 'Mississauga',
      region: 'Ontario',
    },
  }, {
    resumeId: id,
    company: 'Sun Life Financial',
    position: 'Application Developer',
    website: 'https://www.sunlife.ca/',
    startDate: new Date('January 1, 2012'),
    endDate: new Date('May 31, 2012'),
    highlights: ['Acted as an intermediary between business and engineering to create new system monitoring tools using Asp.Net & C#.',
      'Patched back-end pension software using C++ and PL/SQL.'],
    location: {
      city: 'Kitchener',
      region: 'Ontario',
    },
  }, {
    resumeId: id,
    company: 'SS&C Technologies',
    position: 'Investment Performance Intern',
    website: 'http://www.ssctech.com/',
    startDate: new Date('May 1, 2010'),
    endDate: new Date('September 30, 2010'),
    highlights: ['Designed and implemented tests for portfolio attribution software to ensure consistency and accuracy using VBA and C#.',
      'Analyzed performance measurement and attribution formulas and their associated exception cases.'],
    location: {
      city: 'Mississauga',
      region: 'Ontario',
    },
  }, {
    resumeId: id,
    company: 'Wilfrid Laurier University Library',
    position: 'Administrative and Organizational Assistant',
    website: 'https://library.wlu.ca/',
    startDate: new Date('May 1, 2009'),
    endDate: new Date('May 31, 2010'),
    highlights: ['Served patrons at circulation desk.',
      'Organized and restocked shelves'],
    location: {
      city: 'Waterloo',
      region: 'Ontario',
    },
  }, {
    resumeId: id,
    company: 'Apollo Painting',
    position: 'Owner and Sole Proprietor',
    website: '',
    startDate: new Date('May 1, 2007'),
    endDate: new Date('August 31, 2007'),
    highlights: ['Registered a sole proprietor ship, acquired insurance and filed taxes',
      'Reckognized by the federal government for my accomplisments in the form of a grant.',
      'Managed 4 employees, handled payroll and developed customer relationships'],
    location: {
      city: 'Guelph',
      region: 'Ontario',
    },
  }, {
    resumeId: id,
    company: 'Walmart',
    position: 'Nightshift Associate',
    website: 'http://www.walmart.ca/en',
    startDate: new Date('March 1, 2008'),
    endDate: new Date('August 31, 2008'),
    highlights: ['Engaged in supply chain management stocking inventory and organizing employees to distribute inventory more effectively.'],
    location: {
      city: 'Guelph',
      region: 'Ontario',
    },
  }, {
    resumeId: id,
    company: 'Sleeman Centre',
    position: 'Line Cook',
    website: 'http://thesleemancentre.com/',
    startDate: new Date('September 1, 2005'),
    endDate: new Date('June 30, 2007'),
    highlights: ['Prepared short orders in fast-paced setting'],
    location: {
      city: 'Guelph',
      region: 'Ontario',
    },
  }];

  return Promise.all(data.map(workData => new Promise((resolve, reject) => {
    Work.update(
      workData,
      { $setOnInsert: workData },
      { upsert: true },
      (err, work) => {
        if (err) reject(err);
        resolve(work);
      });
  })));
};
