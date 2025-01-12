import express from 'express';
import { AdminGetcontactUsController } from '../controllers/adminGetContactUsController.js';
import { AdminAddDate, AdminAddNewDoctor, AdminAddService, AdminGetDoctors } from '../controllers/adminController.js';
import AuthMiddleware from "../middlewares/authMiddleware.js";
import { isAdmin } from '../middlewares/isAdminMiddleware.js';

const router = express.Router();

router.get('/getcontactus',AuthMiddleware , isAdmin, AdminGetcontactUsController);
router.get("/getdoctors",AuthMiddleware , isAdmin, AdminGetDoctors);

router.post("/addDoctor",AuthMiddleware , isAdmin, AdminAddNewDoctor);
router.post("/adddate", AuthMiddleware , isAdmin, AdminAddDate);
router.post("/addservice", AuthMiddleware , isAdmin, AdminAddService);

export default router;

