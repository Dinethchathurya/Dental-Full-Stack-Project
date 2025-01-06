import express from 'express';
import bcrypt from 'bcryptjs';
import bodyParser from 'body-parser';
import cors from 'cors';

const port = 9000;
const app = express();


app.use(cors());

app.use(bodyParser.json());

const users = [];

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  console.log(password);
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    res.status(201).json({ message: 'User registered successfully' });
    console.log("user registered  done");
    console.log(hashedPassword);
    
  } catch (error) {
    console.log("user registered  not succes");
    console.log(error);
  }
  
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
