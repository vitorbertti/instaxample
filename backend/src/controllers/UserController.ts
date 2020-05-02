import { Request, Response } from 'express';

import User from '../models/User';
import Photo from '../models/Photo';

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

   async update(req: Request, res: Response) {
      const { user_id } = req.headers;
      const { friend_id } = req.headers;

      if (!user_id) {
         return res.status(400).json({ error: 'User does not exist' });
      }

      if (!friend_id) {
         return res.status(400).json({ error: 'Friend does not exist' });
      }

      const friend = await User.findById(friend_id);

      if (!friend) {
         return res.status(400).json({ error: 'User not found' });
      }

      await User.update({ _id: user_id }, { $push: { friend } });
      return res.status(200).json('The friend was added');
   },

   async destroy(req: Request, res: Response) {
      const { user_id } = req.headers;

      if (!user_id) {
         return res.status(400).json({ error: 'User does not exist' });
      }

      const userPosts = await Photo.find({ user: <String>user_id });

      userPosts.forEach(async (post) => {
         await Photo.findByIdAndRemove(post._id);
      });

      await User.findByIdAndRemove(user_id);

      return res.status(200).json('The User was deleted');
   },

   async removeFriend(req: Request, res: Response) {
      const { user_id } = req.headers;
      const { friend_id } = req.params;

      if (!user_id) {
         return res.status(400).json({ error: 'User does not exist' });
      }

      await User.update(
         { _id: user_id },
         { $pull: { friend: { _id: friend_id } } }
      );
      return res.status(200).json('The Friend was removed');
   },
};
