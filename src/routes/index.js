import express from 'express';
import graphql from './graphql';
import auth from './auth';
import setup from './setup';
import requireJwt from './auth/requireJwt';

const routes = express.Router();

routes.use('/auth/', auth);
routes.use(setup);
routes.use(graphql);
routes.use(requireJwt);

export default routes;

