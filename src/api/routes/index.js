import express from 'express';
import graphql from './graphql';
import setup from './setup';
import auth from './auth';

const routes = express.Router();

routes.use(setup);
routes.use(graphql);
routes.use('/auth', auth)

export default routes;

