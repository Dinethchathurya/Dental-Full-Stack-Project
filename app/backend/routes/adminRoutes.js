import express from 'express';
import { AdminGetcontactUsController } from '../controllers/adminGetContactUsController.js';
import { AdminAddDate, AdminAddNewDoctor, AdminGetDoctors } from '../controllers/adminController.js';
import { GetAvailableDates } from '../controllers/useController.js';


const router = express.Router();

router.get('/getcontactus', AdminGetcontactUsController);
router.get("/getdoctors", AdminGetDoctors);

router.post("/addDoctor", AdminAddNewDoctor);
router.post("/adddate", AdminAddDate);

export default router;

