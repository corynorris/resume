import express from 'express';
import graphql from './graphql';
import auth from './auth';
import requireJwt from './auth/requireJwt';

const routes = express.Router();

routes.use('/auth/', auth);
routes.use(graphql);
routes.use(requireJwt);

export default routes;

