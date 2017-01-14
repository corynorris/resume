import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import jwt from 'express-jwt';
import compression from 'compression';
import apiRoutes from './api/routes';
import clientRoutes from './client/routes';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression());

// Environment Parameters
app.set('port', (process.env.PORT || 3000));
app.set('mongo_url', process.env.MONGO_URL || '');
app.set('secret', process.env.SECRET || 'super-secret-password');

// Connect to mongoose
mongoose.Promise = global.Promise;
mongoose.connect(app.get('mongo_url'));

// Routes
app.use(apiRoutes);

// All client routes require jwt
app.use(jwt({
  secret: app.get('secret'),
  credentialsRequired: false
}).unless({
  path: ['/login', '/register']
}), function (req, res, next) {
  // if (req.user) next();
  // res.redirect('/login');
  next();
})
app.use(clientRoutes);

app.listen(app.get('port'), () => {
  console.log(`Node app is running at localhost: ${app.get('port')}`);
});
