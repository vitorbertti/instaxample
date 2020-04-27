import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
   text: String,
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
   },
   photo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Photo',
   },
});

export default mongoose.model('Comment', CommentSchema);
