import mongoose from 'mongoose';

interface LikeInterface extends mongoose.Document {
   username: String;
   user: String;
   photo: String;
}

const LikeSchema = new mongoose.Schema({
   username: String,
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
   },
   photo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Photo',
   },
});

export default mongoose.model<LikeInterface>('Like', LikeSchema);
