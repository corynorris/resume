// "education": [
//   {
//     "institution": "University",
//     "area": "Software Development",
//     "studyType": "Bachelor",
//     "startDate": "2011-01-01",
//     "endDate": "2013-01-01",
//   }
// ],

import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
  resumeId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  institution: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  studyType: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});

export default mongoose.model('Education', educationSchema);
