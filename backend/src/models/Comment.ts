import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
   login: String,
   text: String,
   photo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Photo',
   },
});

export default mongoose.model('Comment', CommentSchema);
