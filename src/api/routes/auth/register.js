import bcrypt from 'bcrypt';
import User from '../../models/user';
import MongoErrorTransformer from '../../transformers/mongoError';

export default (req, res) => {
  const password = req.body.password;
  const username = req.body.username;
  console.log(req.body);
  if (typeof password === 'undefined'
    || password.length === 0
    || typeof username === 'undefined'
    || username.length === 0) {
    return res.send({ success: false, message: 'username and Password are required, and must be atleast 4 characters long' });
  }
  return bcrypt.hash(password, 16, (authError, hash) => {
    if (authError) return res.json({ sucess: false, message: authError });
    const user = new User({ username, hash });
    return user.save((saveError) => {
      if (saveError) return res.json({ error: MongoErrorTransformer.transform(saveError) });
      return res.json({ success: true, message: 'Registered successfully' });
    });
  });
};
