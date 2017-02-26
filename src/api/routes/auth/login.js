import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../../models/user';
import MongoErrorTransformer from '../../transformers/mongoError';

export default (req, res) => {
  const username = req.body.username;
  const passwordAttempt = req.body.password;
  User.findOne({
    username,
  }, (findError, user) => {
    if (findError) {
      res.status(403).json({ success: false, message: MongoErrorTransformer.transform(findError) });
    } else if (!user) {
      res.status(403).json({ success: false, message: 'Authentication failed. User not found.' });
    } else {
      bcrypt.compare(passwordAttempt, user.hash, (authErr) => {
        if (authErr) return res.status(403).json({ success: false, message: 'Authentication failed. Wrong password.' });
        const token = jwt.sign(user, req.app.get('secret'), {
          expiresIn: 60 * 60 * 24,
        });
        return res.status(200).json({
          success: true,
          message: 'Authentication succeeded.',
          token,
        });
      });
    }
  });
};
