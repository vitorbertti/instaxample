import { Request, Response } from 'express';

import Comment from '../models/Comment';
import Photo from '../models/Photo';
import User from '../models/User';

export default {
   async index(req: Request, res: Response) {
      const { photo_id } = req.headers;

      const photo = await Photo.findById(photo_id);

      if (!photo) {
         return res.status(400).json({ error: 'Photo does not exist' });
      }

      const response = await Comment.find({ photo: <String>photo_id });

      return res.json(response);
   },

   async store(req: Request, res: Response) {
      const { photo_id } = req.headers;
      const { user_id } = req.headers;

      const photo = await Photo.findById(photo_id);

      if (!photo) {
         return res.status(400).json({ error: 'Photo does not exist' });
      }

      const user = await User.findById(user_id);

      if (!user) {
         return res.status(400).json({ error: 'User does not exist' });
      }

      const username = user.username;
      const { text } = req.body;

      if (!text) {
         return res.status(400).json({ error: 'Please write a comment' });
      }

      const comment = await Comment.create({
         user,
         photo,
         text,
         username,
      });

      await Photo.update({ _id: photo_id }, { $push: { comment } });

      return res.json(comment);
   },

   async destroy(req: Request, res: Response) {
      const { comment_id } = req.headers;

      if (!comment_id) {
         return res.status(400).json({ error: 'Comment does not exist' });
      }

      await Comment.findByIdAndRemove(comment_id);
      return res.status(200).json('The comment was deleted');
   },
};
