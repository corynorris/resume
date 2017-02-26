import express from 'express';
import auth from './auth';
import setup from './setup';
import graphql from './graphql/graphql.js';

const router = express.Router();

router.use('/setup',setup); // protected
router.use('/graphql',graphql);
router.use('/auth',auth)



export default router;

