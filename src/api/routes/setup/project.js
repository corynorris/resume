import Project from '../../models/project';

export default (id) => {
  return Project.insertMany([{
    resumeId: id,
    title: '',
    imageUrl: 'https://images.corynorris.me/profile/formal.jpg',
    demoUrl: 'test',
    sourceUrl: 'test',
    completionDate: new Date('August 1, 2003'),
    summary: 'test',
    tags: ['react', 'graphql'],
  }]);
};
