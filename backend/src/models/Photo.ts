import mongoose from 'mongoose';
require('dotenv').config();

interface PhotoInterface extends Document {
   photo: String;
   time: Date;
   comment: String;
   user: {
      type: mongoose.Schema.Types.ObjectId;
      ref: 'User';
   };
}

const PhotoSchema = new mongoose.Schema(
   {
      photo: String,
      time: Date,
      comment: String,
      // user: {
      //    type: mongoose.Schema.Types.ObjectId,
      //    ref: 'User',
      // },
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
