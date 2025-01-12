import express from 'express';
import { AdminGetcontactUsController } from '../controllers/adminGetContactUsController.js';
import { AdminAddDate, AdminAddNewDoctor, AdminAddService, AdminGetDoctors } from '../controllers/adminController.js';




const router = express.Router();

router.get('/getcontactus', AdminGetcontactUsController);
router.get("/getdoctors", AdminGetDoctors);

router.post("/addDoctor", AdminAddNewDoctor);
router.post("/adddate", AdminAddDate);
router.post("/addservice", AdminAddService);

export default router;

