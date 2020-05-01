import { Request, Response } from 'express';

import User from '../models/User';

export default {
   async index(req: Request, res: Response) {
      const { username } = req.headers;
      const { password } = req.headers;

      const users = await User.findOne({
         username: <String>username,
         password: <String>password,
      });

      return res.json(users);
   },

   async store(req: Request, res: Response) {
      const { username } = req.body;
      const { password } = req.body;
      const { filename } = req.file;

      const user = await User.create({
         profile: filename,
         username,
         password,
      });

      return res.json(user);
   },

   async destroy(req: Request, res: Response) {
      const { user_id } = req.headers;

      if (!user_id) {
         return res.status(400).json({ error: 'User does not exist' });
      }

      await User.findByIdAndRemove(user_id);
      return res.status(200).json('The User was deleted');
   },
};
