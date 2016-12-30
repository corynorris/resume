// "work": [
//     {
//       "name": "Company",
//       "imageUrl": "President",
//       "demoUrl": "http://company.com",
//       "sourceUrl": "http://company.com",
//       "completionDate": "2013-01-01",
//       "summary": "Description...",
//       "tags": [
//         "Started the company"
//       ]
//     }
//   ],

import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  resumeId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  demoUrl: {
    type: String,
    required: true,
  },
  sourceUrl: {
    type: String,
  },
  completionDate: {
    type: Date,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  tags: [{
    type: String,
    required: true,
  }],
});

export default mongoose.model('Project', projectSchema);
