import { Request, Response } from 'express';
import Like from '../models/Like';
import Photo from '../models/Photo';
import User from '../models/User';

export default {
   async index(req: Request, res: Response) {
      const likes = await Like.find();

      return res.json(likes);
   },

   async store(req: Request, res: Response) {
      const { user_id } = req.headers;
      const { photo_id } = req.headers;

      const photo = await Photo.findById(photo_id);

      if (!photo) {
         return res.status(400).json({ error: 'Photo does not exist' });
      }

      const user = await User.findById(user_id);

      if (!user) {
         return res.status(400).json({ error: 'User does not exist' });
      }
      const username = user.username;

      const like = await Like.create({
         user,
         photo,
         username,
      });

      await Photo.update({ _id: photo_id }, { $push: { like } });

      return res.json(like);
   },

   async destroy(req: Request, res: Response) {
      const { like_id } = req.headers;

      if (!like_id) {
         return res.status(400).json({ error: 'Like does not exist' });
      }

      await Like.findByIdAndRemove(like_id);
      return res.status(200).json('The like was deleted');
   },
};
