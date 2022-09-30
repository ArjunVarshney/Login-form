import jwt from "jsonwebtoken";
import User from "../model/user";

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      // verifyToken
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET_KEY);

      req.user = await User.findById(decoded.id).select("-password");
      
      next();

    } catch (err) {
      console.log(err);
    }
  }
};

export default protect;
