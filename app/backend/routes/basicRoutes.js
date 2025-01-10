import express from 'express';
import {contactUsController}  from '../controllers/contactUsContoller.js'

const router = express.Router();

router.post('/contactus', contactUsController);

export default router;

