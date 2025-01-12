import express from 'express';
import {contactUsController}  from '../controllers/contactUsContoller.js'
import { GetAvailableDates, GetBookingsToCheckAvailability, GetDoctors, GetServices, SaveBookingDetails } from '../controllers/useController.js';
import { CreateaPymentIntent } from '../controllers/useController.js';
const router = express.Router();

router.get("/getDates" , GetAvailableDates);
router.get("/getServices", GetServices);
router.get("/getDoctors", GetDoctors);
router.get("/getBookings", GetBookingsToCheckAvailability);

router.post('/contactus', contactUsController);
router.post('/create-payment-intent', CreateaPymentIntent);
router.post('/saveBooking', SaveBookingDetails);



export default router;

