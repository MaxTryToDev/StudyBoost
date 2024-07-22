import express from "express";
import * as FoldersController from "../controllers/FoldersController";
const router = express.Router();

router.route('/')
  .get(FoldersController.getAllFolders)
  .post(FoldersController.createFolder)


router.route('/:slug')
  .get(FoldersController.getFolder)
  .delete(FoldersController.deleteFolder)
  .patch(FoldersController.updateFolder)

export default router;