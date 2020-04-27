import mongoose from 'mongoose';
require('dotenv').config();

const PhotoSchema = new mongoose.Schema(
   {
      photo: String,
      date: Date,
      comment: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment',
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

export default mongoose.model('Photo', PhotoSchema);
