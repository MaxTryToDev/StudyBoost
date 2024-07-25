import express from "express";
import * as FlashcardsController from "../controllers/FlashcardsController";

const router = express.Router();


router.route('/')
  .get(FlashcardsController.getAllFlashcard)
  .post(FlashcardsController.createFlashcard)


router.route('/group')
  .get(FlashcardsController.getAllGroup)
  .post(FlashcardsController.createGroup)


router.route('/:id')
  .get(FlashcardsController.getFlashcard)
  .patch(FlashcardsController.updateFlashcard)
  .delete(FlashcardsController.deleteFlashcard);

router.route('/group/:id')
  .get(FlashcardsController.getGroup)
  .patch(FlashcardsController.updateGroup)
  .delete(FlashcardsController.deleteGroup);


export default router;