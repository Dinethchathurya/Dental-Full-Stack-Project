import mongoose from 'mongoose';

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type : Boolean,
    required :true,
  }
});

// Create the user model
const User = mongoose.model('UserModel', userSchema);

export default User;
