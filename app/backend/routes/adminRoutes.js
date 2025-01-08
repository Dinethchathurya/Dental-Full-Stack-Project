import express from 'express';
import { AdminGetcontactUsController } from '../controllers/adminGetContactUsController.js';


const router = express.Router();

router.get('/getcontactus', AdminGetcontactUsController);

export default router;

