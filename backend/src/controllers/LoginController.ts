import { Request, Response } from 'express';
import Photo from '../models/Photo';
import User from '../models/User';

export default {
   async index(req: Request, res: Response) {
      const data = await Photo.find();
      res.json(data);
   },

   async create(req: Request, res: Response) {
      const { filename } = req.file;
      const { comment } = req.body;
      // const { user_id } = req.headers;

      // const user = await User.findById(user_id);

      // if (!user) {
      //    return res.status(400).json({ error: 'User does not exist' });
      // }

      const spot = await Photo.create({
         // user: user_id,
         photo: filename,
         comment,
      });

      return res.json(spot);
   },
};
