import {Router, Request, Response } from 'express';
import multer from "multer";

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { DeleteUserController } from './controllers/user/DeleteUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { UpdateUserController } from './controllers/user/UpdateUserController';


import { InsertPatientController } from './controllers/patient/InsertPatientController';
import { ListAllPatientsController } from './controllers/patient/ListAllPatientsController';
import { ListOnePatientController } from './controllers/patient/ListOnePatientController';
import { UpdatePatientController } from './controllers/patient/UpdatePatientController';
import { DeletePatientController } from './controllers/patient/DeletePatientController';
import uploadConfig from './config/multer';

const router = Router();

const upload = multer(uploadConfig.upload("./img"))

//Rotas de User
router.post('/cadastro', new CreateUserController().handle);
router.post('/login', new AuthUserController().handle);
router.get('/home/me', isAuthenticated, new DetailUserController().handle);
router.delete('/home/me/delete', isAuthenticated, new DeleteUserController().handle);
router.put('/home/me/update', isAuthenticated, new  UpdateUserController().handle);

//Rotas de Patient
router.get('/home/patient', isAuthenticated, new ListAllPatientsController().handle);
router.get('/home/patient/data', isAuthenticated, new ListOnePatientController().handle);
router.post('/home/patient/insert', isAuthenticated, /* upload.single('file'), */ new InsertPatientController().handle);
router.put('/home/patient/update', isAuthenticated, new  UpdatePatientController().handle);
router.delete('/home/patient/delete', isAuthenticated, new  DeletePatientController().handle);


export { router }