import Education from '../../models/education';

export default (id) => {
  const data = {
    resumeId: id,
    description: 'Honours Business Administration and Computer Science, Co-op Option.',
    institution: 'Wilfrid Laurier',
    area: 'Honours Business and Computer Science',
    studyType: 'Bachelor',
    startDate: new Date('August 1, 2008'),
    endDate: new Date('April 30, 2014'),
  };

  return Education.update(
    data,
    { $setOnInsert: data },
    { upsert: true },
  );
};
