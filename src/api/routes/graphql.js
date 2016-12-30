import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../graphql/';

const router = express.Router();

// GraphqQL server route
router.use('/graphql', graphqlHTTP(() => ({
  schema,
  pretty: true,
  graphiql: true,
})));

export default router;
