import mongoose from 'mongoose';
require('dotenv').config();

interface PhotoInterface extends mongoose.Document {
   photo: String;
   date: Date;
   description: String;
   username: String;
   profile_photo: String;
   profile_url: String;
   comment: [
      {
         text: String;
         username: String;
         user: String;
      }
   ];
   user: String;
   like: [
      {
         username: String;
         user: String;
      }
   ];
}

const PhotoSchema = new mongoose.Schema(
   {
      photo: String,
      date: Date,
      description: String,
      username: String,
      profile_photo: String,
      profile_url: String,
      like: [
         {
            username: String,
            user: {
               type: mongoose.Schema.Types.ObjectId,
               ref: 'User',
            },
         },
      ],
      comment: [
         {
            text: String,
            username: String,
            user: {
               type: mongoose.Schema.Types.ObjectId,
               ref: 'User',
            },
         },
      ],
      user: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User',
      },
   },
   {
      toJSON: {
         virtuals: true,
      },
   }
);

PhotoSchema.virtual('photo_url').get(function (this: any) {
   return `${process.env.URI}/files/${this.photo}`;
});

export default mongoose.model<PhotoInterface>('Photo', PhotoSchema);
