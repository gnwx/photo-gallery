import UserModel from "../models/User.js";
import bcrypt from "bcrypt";
import createToken from "../utils/createToken.js";
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = createToken(user._id, email);

      res.status(200).json({
        success: true,
        user: { name: user.name, id: user._id },
        token,
      });
    } else {
      res
        .status(401)
        .json({ success: false, message: "Invalid username or password" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
  }
};

const signIn = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const ifExists = await UserModel.findOne({ email });
    if (ifExists) {
      return res.status(409).json({
        success: false,
        message: "User with that email already exists.",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    await UserModel.create({
      name,
      email,
      password: hashedPass,
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "An error occurred during sign up. Please try again.",
    });
  }
};

export { signIn, login };
