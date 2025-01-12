import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';

// Register new user
export const registerUser = async (req, res) => {
  console.log("called");
  const { username, password } = req.body;
  console.log(username);
  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        console.log("User already registered")
        return res.status(400).json({ message: 'User already registered' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username: username,
      password: hashedPassword,
      isAdmin : false
    });

    // Save the user in the database
    const savedUser = await newUser.save();
    console.log("user registerd");
    res.json("user registerd");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

};