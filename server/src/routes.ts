import {Router, Request, Response } from 'express'
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

const router = Router();

router.post('/cadastro', new CreateUserController().handle);

export { router }