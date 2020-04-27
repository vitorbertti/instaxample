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
      // const { comment } = req.body;
      const { user_id } = req.headers;
      const date = new Date();

      const user = await User.findById(user_id);

      if (!filename) {
         return res.status(400).json({ error: 'File does not exist' });
      }

      if (!user) {
         return res.status(400).json({ error: 'User does not exist' });
      }

      const photo = await Photo.create({
         photo: filename,
         date,
         user: user_id,
      });

      return res.json(photo);
   },
};
