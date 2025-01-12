import express from 'express';
import {contactUsController}  from '../controllers/contactUsContoller.js'
import { GetAvailableDates, GetDoctors, GetServices } from '../controllers/useController.js';
import { CreateaPymentIntent } from '../controllers/useController.js';
const router = express.Router();

router.get("/getdates" , GetAvailableDates);
router.get("/getservices", GetServices);
router.get("/getDoctors" , GetDoctors);

router.post('/contactus', contactUsController);
router.post('/create-payment-intent', CreateaPymentIntent);



export default router;

