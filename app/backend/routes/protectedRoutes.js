// routes/protectedRoute.js
import express from 'express';
import authMiddleware from '../middlewares/authMiddleware' ;
const router = express.Router();

// Protected Route
router.post('/booking', authMiddleware, (req, res) => {
  res.json({ message: `Welcome , you have access to this route.` });
});

module.exports = router;
