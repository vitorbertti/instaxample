import mongoose from 'mongoose';

interface UserInterface extends mongoose.Document {
   username: String;
   profile_photo: String;
   profile_url: String;
   password: String;
   friend: [
      {
         _id: String;
      }
   ];
}

const UserSchema = new mongoose.Schema(
   {
      username: String,
      profile: String,
      password: String,
      friend: [
         {
            user: {
               type: mongoose.Schema.Types.ObjectId,
               ref: 'User',
            },
         },
      ],
   },
   {
      toJSON: {
         virtuals: true,
      },
   }
);

UserSchema.virtual('profile_url').get(function (this: any) {
   return `${process.env.URI}/files/${this.profile}`;
});

export default mongoose.model<UserInterface>('User', UserSchema);
