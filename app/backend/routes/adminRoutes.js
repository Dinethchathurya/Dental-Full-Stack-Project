import express from 'express';
import { AdminGetcontactUsController } from '../controllers/adminGetContactUsController.js';
import { AdminAddNewDoctor, AdminGetDoctors } from '../controllers/adminController.js';


const router = express.Router();

router.get('/getcontactus', AdminGetcontactUsController);
router.get("/getdoctors", AdminGetDoctors);


router.post("/addDoctor", AdminAddNewDoctor);

export default router;

