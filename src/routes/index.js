import express from 'express';
import graphql from './graphql';
import auth from './auth';

const routes = express.Router();

routes.use('/api/', auth);
routes.use(graphql);


export default routes;

