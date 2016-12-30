import express from 'express';
import graphql from './graphql';
import setup from './setup';

const routes = express.Router();

routes.use(setup);
routes.use(graphql);

export default routes;

