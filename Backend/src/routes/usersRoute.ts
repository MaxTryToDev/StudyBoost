import express from "express";
import * as UsersController from "../controllers/UsersController";
const router = express.Router();

router.route('/register', )
  .post(UsersController.registerUser)


router.route('/login')
  .post(UsersController.loginUser)


export default router;