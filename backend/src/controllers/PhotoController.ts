import { Request, Response } from 'express';
import Photo from '../models/Photo';
import User from '../models/User';

import dateFormat from 'dateformat';

export default {
   async index(req: Request, res: Response) {
      const { user_id } = req.headers;

      const user = await User.findById(user_id);

      if (user) {
         const friends = user.friend;

         if (friends.length) {
            friends.push(user._id);

            var data: any[] = [];

            await Photo.find({}, () => {
               friends.forEach((friend) => {
                  data.push(Photo.find({ user: <String>friend._id }));
               });
            }).sort({ date: 'desc' });

            Promise.all(data).then((response) => {
               return res.json(response.flat());
            });
         } else {
            const response = await Photo.find({ user: <String>user_id }).sort({
               date: 'desc',
            });
            return res.json(response);
         }
      } else {
         return res.status(400).json({ error: 'User does not exist' });
      }
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

   async destroy(req: Request, res: Response) {
      const { photo_id } = req.headers;

      if (!photo_id) {
         return res.status(400).json({ error: 'Photo does not exist' });
      }

      await Photo.findByIdAndRemove(photo_id);
      return res.status(200).json('The photo was deleted');
   },
};
