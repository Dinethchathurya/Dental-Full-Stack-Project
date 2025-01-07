import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';

// Register new user
export const registerUser = async (req, res) => {
    console.log("called");
  const { username, password } = req.body;
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
      username,
      password: hashedPassword,
    });

    // Save the user in the database
    const savedUser = await newUser.save();
    console.log("user registerd");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({
//       username,
//       password: hashedPassword,
//     });

//     const savedUser = await newUser.save();

//     res.status(201).json(savedUser);
//     console.log("user Registerd");
//     console.log(savedUser);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//     console.log(error)
//   }
};