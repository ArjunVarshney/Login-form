import express from "express";
import {
  autoLogin,
  loginUser,
  signUpUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/signup", signUpUser);
router.post("/login", loginUser);
router.post("/autologin", autoLogin);

export default router;
