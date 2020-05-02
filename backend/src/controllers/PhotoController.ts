import { Request, Response } from 'express';
import Photo from '../models/Photo';
import User from '../models/User';

export default {
   async index(req: Request, res: Response) {
      const { user_id } = req.headers;

      const user = await User.findById(user_id);

      if (user) {
         const friends = user.friend;

         await Photo.find({}, async () => {
            var response: any[] = [];
            response.push(await Photo.find({ user: <String>user_id }));
            if (friends.length) {
               friends.forEach((friend) => {
                  response.push(Photo.find({ user: <String>friend._id }));
               });

               Promise.all(response).then((data) => {
                  res.json(data);
               });
            } else {
               res.json(response);
            }
         }).sort({ date: 'desc' });
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
