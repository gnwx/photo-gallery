import jwt from "jsonwebtoken";
const createToken = (_id, username) => {
  return jwt.sign({ _id, username }, process.env.JWT_SECRET, {
    expiresIn: "2h",
  });
};

export default createToken;
