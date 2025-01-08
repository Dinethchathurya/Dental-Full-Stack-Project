import express, { json } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';
import authRoutes from './routes/ authRoutes.js';
import { configDotenv } from 'dotenv';
import basicRoutes from "./routes/basicRoutes.js"

configDotenv();
const app = express();
const port = process.env.PORT;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/user', authRoutes);

app.use('', basicRoutes)

// Default route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
