import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
   userPhoto: String,
   username: String,
});

export default mongoose.model('User', UserSchema);
