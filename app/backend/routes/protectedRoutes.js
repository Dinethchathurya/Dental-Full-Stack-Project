// routes/protectedRoute.js
import express from 'express';
import { CreateaPymentIntent } from '../controllers/useController.js';
const router = express.Router();

// Protected Route
router.post('/booking', (req, res) => {
  res.json({ message: `Welcome , you have access to this route.` });
});


module.exports = router;
