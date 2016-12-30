// "profiles": [
//       {
//         "network": "CodePen",
//         "username": "corynorris",
//         "url": "https://codepen.io/corynorris/"
//       }
//     ]

import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  resumeId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  network: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Profile', profileSchema);
