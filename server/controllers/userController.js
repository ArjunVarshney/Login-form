import User from "../model/user.js";
import Token from "../model/token.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import token from "../model/token.js";

dotenv.config();

const genToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET_KEY, {
    expiresIn: "30d",
  });
};

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
    const newData = await newUser.save();
    res.status(201).json({
      firstName: newData.firstName,
      lastName: newData.lastName,
      email: newData.email,
      id: newData.id,
    });
  } catch (err) {
    res
      .status(400)
      .json({ msg: "An error occurred while signing you up", err });
  }
};

export const autoLogin = async (req, res) => {
  try {
    var decoded = jwt.verify(
      req.headers.authorization,
      process.env.TOKEN_SECRET_KEY
    );
    if (decoded) {
      const user = await User.findOne({ _id: decoded.id });
      return res.status(200).json({
        name: user.firstName,
        id: user.id,
      });
    }
  } catch (error) {
    await token.deleteOne({ token: req.headers.authorization });
    return res.status(400).json({
      msg: "Token expired",
      error,
    });
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
      const newToken = new Token({ token: genToken(user.id) });
      await newToken.save();
      return res.status(200).json({
        name: user.firstName,
        id: user.id,
        token: newToken.token,
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

export const logoutUser = async (req, res) => {
  try {
    await Token.deleteOne({ token: req.body.token });
    res.status(200).json({
      msg: "deleted",
    });
  } catch (error) {
    res.status(400).json({
      msg: "Some error occurred while logging out !!",
    });
  }
};
