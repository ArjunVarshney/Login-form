import express from "express";
import {
  autoLogin,
  loginUser,
  signUpUser,
  logoutUser
} from "../controllers/userController.js";

const router = express.Router();

router.post("/signup", signUpUser);
router.post("/login", loginUser);
router.post("/autologin", autoLogin);
router.post("/logout", logoutUser);

export default router;
