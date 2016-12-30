import express from 'express';
import authenticate from './authenticate';
import register from './register';

const auth = express.Router();

auth.post('/register', register);
auth.post('/authenticate', authenticate);

export default auth;
