import bcrypt from 'bcrypt';
import User from '../../models/user';
import MongoErrorTransformer from '../../transformers/mongoError';

export default (req, res) => {
  const password = req.body.password;
  const name = req.body.name;
  if (typeof password === 'undefined'
    || password.length < 4
    || typeof name === 'undefined'
    || name.length < 4) {
    return res.send({ error: 'Name and Password are required, and must be atleast 4 characters long' });
  }
  bcrypt.hash(password, 16, (authError, hash) => {
    if (authError) return res.json({ error: authError });
    const user = new User({ name, hash });
    user.save((saveError) => {
      if (saveError) return res.json({ error: MongoErrorTransformer.transform(saveError) });
      return res.json({ message: 'success' });
    });
  });
};
