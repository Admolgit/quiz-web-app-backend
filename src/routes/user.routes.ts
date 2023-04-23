import express from 'express';
import { createUser, getUser, getUsers } from '../controllers/user.controllers';

const userRouter = express.Router();

userRouter.post('/api/create-user', createUser);
userRouter.get('/api/:id/user', getUser);
userRouter.get('/api/users', getUsers);

export default userRouter;