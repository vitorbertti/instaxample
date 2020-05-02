import { Router } from 'express';

import UserController from './controllers/UserController';
import PhotoController from './controllers/PhotoController';
import CommentController from './controllers/CommentController';
import LikeController from './controllers/LikeController';
import multer from 'multer';
import uploadConfig from './config/upload';

const upload = multer(uploadConfig);

const routes = Router();

routes.get('/users', UserController.index);
routes.post('/users', upload.single('profilePhoto'), UserController.store);
routes.put('/users', UserController.update);
routes.put('/users/:friend_id', UserController.removeFriend);
routes.delete('/users', UserController.destroy);

routes.get('/photos', PhotoController.index);
routes.post('/photos', upload.single('photo'), PhotoController.store);
routes.delete('/photos', PhotoController.destroy);

routes.get('/comments', CommentController.index);
routes.post('/comments', CommentController.store);
routes.delete('/comments', CommentController.destroy);

routes.get('/likes', LikeController.index);
routes.post('/likes', LikeController.store);

export default routes;
