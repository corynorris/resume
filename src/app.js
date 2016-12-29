import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
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

app.use('/', express.static(path.join(__dirname, 'public')));

// app.get('/', function (req, res) {
//   console.log(__dirname + '/public/index.html');
//   res.sendFile(path.join(__dirname + '/public/index.html'));
// });

app.use('/api', routes);

app.listen(app.get('port'), () => {
  console.log(`Node app is running at localhost: ${app.get('port')}`);
});
