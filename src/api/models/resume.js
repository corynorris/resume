// "basics": {
//   "name": "Cory Norris",
//   "label": "Programmer",
//   "picture": "",
//   "email": "corynorris@gmail.com",
//   "phone": "(912) 555-4321",
//   "website": "http://johndoe.com",
//   "summary": "A summary of John Doe...",
//   "location": {
//     "address": "2712 Broadway St",
//     "postalCode": "CA 94115",
//     "city": "San Francisco",
//     "countryCode": "US",
//     "region": "California"
//   },
// },

import mongoose from 'mongoose';

const resumeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  label: {
    type: String,
  },
  pictureUrl: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  website: {
    type: String,
  },
  summary: {
    type: String,
    required: true,
  },
  location: {
    address: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    countryCode: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
  },
});

export default mongoose.model('Resume', resumeSchema);
