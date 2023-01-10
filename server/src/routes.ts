import {Router, Request, Response } from 'express'
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';

const router = Router();

router.post('/cadastro', new CreateUserController().handle);
router.post('/login', new AuthUserController().handle);
router.get('/meusdados', isAuthenticated, new DetailUserController().handle);

export { router }