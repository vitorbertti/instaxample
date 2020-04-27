import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
   {
      username: String,
      profilePhoto: String,
   },
   {
      toJSON: {
         virtuals: true,
      },
   }
);

UserSchema.virtual('profile_url').get(function (this: any) {
   return `${process.env.URI}/files/${this.photo}`;
});

export default mongoose.model('User', UserSchema);
