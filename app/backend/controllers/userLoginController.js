import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';


const JWT_SECRET = process.env.JWT_SECRET || 'yourSecretKey';

export const login = async (req, res) => {

    try {
      const { email, password } = req.body;
  
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        console.log("")
        return res.status(400).json({ message: 'Invalid credentials' });

      }
  
      // Compare passwords
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        console.log("")
        return res.status(400).json({ message: 'Invalid credentials' });
        
      }
  
      // Create JWT token
      const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, {
        expiresIn: '1h', // Token expires in 1 hour
      });

      console.log( " jwt token: " + token);
  
      res.json({
        token,
        user: { id: user._id, email: user.email },
      });
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
};
  
