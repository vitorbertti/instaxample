import { Router } from 'express';

import LoginController from './controllers/LoginController';
import multer from 'multer';
import uploadConfig from './config/upload';

const upload = multer(uploadConfig);

const routes = Router();

routes.get('/photos', LoginController.index);
routes.post('/photos', upload.single('photo'), LoginController.create);

export default routes;
