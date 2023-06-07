import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers && req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({
      status: "fail",
      message: "Unauthorized!",
    });
  }
  const token = authHeader.split(" ")[1];
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user._id;
    next();
  } catch (error) {
    return res.status(401).json({
      status: "fail",
      message: "Unauthorized!",
    });
  }
};
