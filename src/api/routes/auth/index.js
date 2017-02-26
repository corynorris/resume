import express from 'express';
import login from './login';
import register from './register';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

export default router;
