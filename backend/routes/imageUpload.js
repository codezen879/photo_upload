import express from 'express';
import { imageCreate,imageGet } from '../controller/imageUpload.js';
const router=express.Router();
router.post("/create-image",imageCreate);
router.get("/get-image/:id",imageGet);
export default router;