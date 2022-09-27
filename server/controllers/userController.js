import User from "../model/user.js";

export const signUpUser = async (req, res) => {
  try {
    const user = req.body;
    const newUser = new User(user);
    await newUser.save();
    res.status(200).json({ msg: "Sign-Up successfull" });
  } catch (err) {
    res.status(400).json({ msg: "An error occurred while signing you up" });
  }
};
