import express, { json } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import { configDotenv } from 'dotenv';
import basicRoutes from "./routes/basicRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import { WebSocketServer } from 'ws';

configDotenv();
const app = express();
const port = process.env.PORT;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(express.json());


// Routes
app.use('/api/user', authRoutes);

app.use('', basicRoutes);

app.use('/api/admin', adminRoutes);



// Default route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});



const wss = new WebSocketServer({ port: 8080 }); 

wss.on('connection', (ws) => {
  console.log("A client connected to the WebSocket server.");
  ws.on('message', (message) => {
    console.log("Received message:", message);
  });

  ws.send("Hello from WebSocket server!");
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
