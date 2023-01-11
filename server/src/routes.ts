import {Router, Request, Response } from 'express';
import multer from "multer";
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { InsertPatientController } from './controllers/patient/InsertPatientController';
import { ListAllPatientsController } from './controllers/patient/ListAllPatientsController';
import uploadConfig from './config/multer';

const router = Router();

const upload = multer(uploadConfig.upload("./img"))

//Rotas de User
router.post('/cadastro', new CreateUserController().handle);
router.post('/login', new AuthUserController().handle);
router.get('/meusdados', isAuthenticated, new DetailUserController().handle);

//Rotas de Patient
router.post('/insert', isAuthenticated, upload.single('file'), new InsertPatientController().handle);

export { router }