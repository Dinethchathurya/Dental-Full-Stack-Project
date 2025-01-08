// routes/protectedRoute.js
import express from 'express';
import authMiddleware from '../middlewares/authMiddleware' ;
const router = express.Router();

// Protected Route
router.get('/dashboard', authMiddleware, (req, res) => {
  res.json({ message: `Welcome ${req.user.email}, you have access to this route.` });
});

module.exports = router;
