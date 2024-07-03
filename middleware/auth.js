const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtCode = process.env.JWT_CODE;

exports.checkAuth = (req, res, next) => {
  //console.log(req.headers.authorization);
  const token = req.headers.authorization;
  // const token = req.headers.authorization.split(" ")[1];
  //console.log(token);
  if (!token) {
    return res.status(401).json({ message: "Auth failed" });
  }
  try {
    const decodedToken = jwt.verify(token, jwtCode);
    req.userData = { userId: decodedToken.userId, email: decodedToken.email };
    //console.log(req.userData);
    next();
  } catch (error) {
    res.status(401).json({ message: "Auth failed" });
  }
};
