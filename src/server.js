import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import compression from 'compression';
import jwt from 'express-jwt';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import apiRoutes from './api/routes';
import clientRoutes from './client/routes';
import webpackConfig from '../webpack.config.js'; 

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

// Setup JWT Token Middleware
app.use(jwt({
  secret: app.get('secret'),
  credentialsRequired: false
}).unless({
  path: ['/api/auth/login', '/api/auth/register', '/api/graphql']
}));



// Api Server
app.use('/api', apiRoutes);


if (process.env.NODE_ENV === 'production') {
  app.use(clientRoutes);
} else {
  const compiler = webpack(webpackConfig);
  const client = new WebpackDevServer(compiler, {
    hot: true,
    inline: true,
    contentBase: 'src/client/public/',
    historyApiFallback: true,
    proxy: {
      '/api/**': `http://localhost:${3000}/`,
    },
    publicPath: '/static/',
    stats: {colors: true}
  });
  client.listen(8080);
}


app.listen(app.get('port'), () => {
  console.log(`Node app is running at localhost: ${app.get('port')}`);
});
