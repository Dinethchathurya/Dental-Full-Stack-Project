import express from 'express';
import {contactUsController}  from '../controllers/contactUsContoller.js'
import { GetAvailableDates, GetServices } from '../controllers/useController.js';

const router = express.Router();

router.get("/getdates" , GetAvailableDates);
router.get("/getservices", GetServices);

router.post('/contactus', contactUsController);


export default router;

