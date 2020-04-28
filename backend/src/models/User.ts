import mongoose from 'mongoose';

interface UserInterface extends mongoose.Document {
   username: String;
   profile_photo: String;
   profile_url: String;
}

const UserSchema = new mongoose.Schema(
   {
      username: String,
      profile_photo: String,
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

export default mongoose.model<UserInterface>('User', UserSchema);
