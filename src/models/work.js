// "work": [
//     {
//       "company": "Company",
//       "position": "President",
//       "website": "http://company.com",
//       "startDate": "2013-01-01",
//       "endDate": "2014-01-01",
//       "summary": "Description...",
//       "highlights": [
//         "Started the company"
//       ]
//     }
//   ],

import mongoose from 'mongoose';

const workSchema = new mongoose.Schema({
  resumeId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  website: {
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
  highlights: [{
    type: String,
    required: true,
  }],
  location: {
    city: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
  },
});

export default mongoose.model('Work', workSchema);
