import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

import schema from './graphql';


const app = express();
app.set('port', (process.env.PORT || 3000));
app.set('mongo_url', process.env.MONGO_URL || '');
// GraphqQL server route
app.use('/graphql', graphqlHTTP(req => ({
  schema,
  pretty: true,
})));


// Connect mongo database
mongoose.connect(app.get('mongo_url'));


app.listen(app.get('port'), () => {
  console.log(`Node app is running at localhost: ${app.get('port')}`);
});


// mongodb://mongo-data:a631a9cb9659a252ff2eab13fcfafc8f@dokku-mongo-mongo-data:27017/mongo-data