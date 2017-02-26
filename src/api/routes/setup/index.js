import express from 'express';

import resume from './resume';
import education from './education';
import profile from './profile';
import work from './work';
import project from './project';

const router = express.Router();

router.use((req, res) => {
  resume().then((savedResume) => {
    const id = savedResume.id;
    Promise.all([
      profile(id),
      education(id),
      work(id),
      project(id),
    ]).then(() => {
      res.status(200).json({ message: 'all promises completed successfully' });
    }).catch((err) => {
      res.status(500).json({ ...err });
    });
  });
});

export default router;
