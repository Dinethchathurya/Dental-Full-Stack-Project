import express from 'express';
import { registerUser } from '../controllers/userController.js';
import {login} from "../controllers/userLoginController.js"


const router = express.Router();

// Route for user registration
router.post('/register', registerUser);
router.post("/login", login)


export default router;

