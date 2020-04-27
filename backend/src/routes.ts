import { Router } from 'express';

import UserController from './controllers/UserController';
import PhotoController from './controllers/PhotoController';
import multer from 'multer';
import uploadConfig from './config/upload';

const upload = multer(uploadConfig);

const routes = Router();

routes.get('/users', UserController.index);
routes.post('/users', upload.single('profilePhoto'), UserController.store);

routes.get('/photos', PhotoController.index);
routes.post('/photos', upload.single('photo'), PhotoController.store);

export default routes;
