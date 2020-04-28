import mongoose from 'mongoose';

interface CommentInterface extends mongoose.Document {
   text: String;
   username: String;
   user: String;
   photo: String;
}

const CommentSchema = new mongoose.Schema({
   text: String,
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

export default mongoose.model<CommentInterface>('Comment', CommentSchema);
