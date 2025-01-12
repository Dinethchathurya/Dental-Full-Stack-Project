import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET || 'yourSecretKey';
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      console.log("Invalid credentials");
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Invalid credentials");
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    console.log("User data:", user);

    const token = jwt.sign({ 
      userId: user._id, 
      username: user.username, 
      isAdmin: user.isAdmin  
    }, JWT_SECRET, {
      expiresIn: '1h', 
    });

    console.log("JWT token:", token);
    res.json({
      token,
      user: { 
        id: user._id, 
        email: user.email,
        isAdmin: user.isAdmin 
      },
    });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
