import { Request, Response } from 'express';

import User from '../models/User';

export default {
   async index(req: Request, res: Response) {
      const users = await User.find();

      return res.json(users);
   },

   async store(req: Request, res: Response) {
      const { username } = req.body;
      const { filename } = req.file;

      const user = await User.create({
         profilePhoto: filename,
         username,
      });

      return res.json(user);
   },
};
