import express from "express";
import * as DocumentsController from "../controllers/DocumentsController"
import {upload} from '../middleware/upload'

const router = express.Router();


router.route("/").post(upload.single("doc"), DocumentsController.upload)

export default router;