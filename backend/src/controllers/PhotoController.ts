import { Request, Response } from 'express';
import Photo from '../models/Photo';
import User from '../models/User';

export default {
   async index(req: Request, res: Response) {
      const data = await Photo.find();
      res.json(data);
   },

   async store(req: Request, res: Response) {
      const { filename } = req.file;
      const { user_id } = req.headers;
      const { description } = req.body;
      const date = new Date();

      const user = await User.findById(user_id);

      if (!filename) {
         return res.status(400).json({ error: 'File does not exist' });
      }

      if (!user) {
         return res.status(400).json({ error: 'User does not exist' });
      }

      const username = user.username;
      const profile_photo = user.profile_photo;
      const profile_url = user.profile_url;

      const photo = await Photo.create({
         photo: filename,
         date,
         description,
         username,
         profile_photo,
         profile_url,
         user,
      });

      return res.json(photo);
   },
};
