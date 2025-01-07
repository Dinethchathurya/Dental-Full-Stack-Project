// import express from 'express';
// import bcrypt from 'bcryptjs';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import mongoose from 'mongoose' ;

// const port = 9000;
// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// try {
//   mongoose.connect('mongodb://mongo:27017/dental');
//   console.log('connected to mongo');
  
// } catch (error) {
//   console.log("monodb connection error" + error);
// }

// // Define the user schema
// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
// });

// // Create the user model
// const User = mongoose.model('Users', userSchema);


// const users = [];

// app.get('/', async (req, res) => {
//   res.send('Hello, World!');

// });

// app.post('/api/register', async (req, res) => {
//   const { username, password } = req.body;
//   console.log(password);
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);   

//     const newUser = new User({
//       username: username,
//       password: hashedPassword,
//     });

//     const savedUser = await newUser.save();
//     res.status(201).json(savedUser);

//     console.log("done");
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//     console.log(error);
//   }
  
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';
import userRoutes from './routes/ userRoutes.js'

const app = express();
const port = 9000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/user', userRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
