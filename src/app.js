import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes';


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Environment Parameters
app.set('port', (process.env.PORT || 3000));
app.set('mongo_url', process.env.MONGO_URL || '');
app.set('secret', process.env.SECRET || 'super-secret-password');

// Connect to mongoose
mongoose.connect(app.get('mongo_url'));

app.use('/', routes);

app.listen(app.get('port'), () => {
  console.log(`Node app is running at localhost: ${app.get('port')}`);
});
