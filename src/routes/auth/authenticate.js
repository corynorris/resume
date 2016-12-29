import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../../models/user';
import MongoErrorTransformer from '../../transformers/mongoError';

export default (req, res) => {
  const name = req.body.name;
  const passwordAttempt = req.body.password;
  User.findOne({
    name,
  }, (findError, user) => {
    if (findError) {
      res.json({ error: MongoErrorTransformer.transform(findError) });
    } else if (!user) {
      res.json({ errors: ['Authentication failed. User not found.'] });
    } else {
      bcrypt.compare(passwordAttempt, user.hash, (authErr) => {
        if (authErr) return res.json({ error: 'Authentication failed. Wrong password.' });
        const token = jwt.sign(user, req.app.get('secret'), {
          expiresIn: 60 * 60 * 24,
        });
        return res.json({
          message: 'Authentication succeeded.',
          token,
        });
      });
    }
  });
};
