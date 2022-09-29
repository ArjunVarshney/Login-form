import User from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Token from "../model/token.js";

dotenv.config();

export const signUpUser = async (req, res) => {
  try {
    const user = req.body;
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(user.password, saltRounds);
    const newUser = new User({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: hashPassword,
    });
    await newUser.save();
    res.status(200).json({ msg: "Sign-Up successfull" });
  } catch (err) {
    res.status(400).json({ msg: "An error occurred while signing you up" });
  }
};

export const loginUser = async (req, res) => {
  const loginCred = req.body;
  const user = await User.findOne({ email: loginCred.email });
  if (!user) {
    return res.status(400).json({
      msg: "This account does not exists",
    });
  }
  try {
    const match = await bcrypt.compare(loginCred.password, user.password);
    if (match) {
      const accessToken = jwt.sign(
        user.toJSON(),
        process.env.ACCESS_SECRET_KEY,
        { expiresIn: "15m" }
      );
      const refreshToken = jwt.sign(
        user.toJSON(),
        process.env.REFRESH_SECRET_KEY
      );
      const newToken = new Token({ token: refreshToken });
      await newToken.save();

      return res.status(200).json({
        accessToken,
        refreshToken,
        name: user.firstName,
        id: user.id,
      });
    } else {
      return res.status(400).json({
        msg: "Wrong credentials! Please check.",
      });
    }
  } catch (err) {
    return res.status(500).json({
      msg: "An error occurred while logging you in! Please try again later",
    });
  }
};
