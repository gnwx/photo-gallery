import UserModel from "../models/User.js";
import bcrypt from "bcrypt";
import createToken from "../utils/createToken.js";
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = createToken(user._id, email);

      res.status(200).json({ success: true, user: user, token });
    } else {
      res
        .status(401)
        .json({ success: false, message: "Invalid username or password" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

const signIn = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const ifExists = await UserModel.findOne({ email });
    if (ifExists) {
      return res
        .status(409)
        .json({ message: "With that email a user already registered." });
    }

    const salt = await bcrypt.genSalt(10);
    2;
    const hashedPass = await bcrypt.hash(password, salt);
    await UserModel.create({
      name,
      email,
      password: hashedPass,
    });

    res.status(201).json({
      success: true,
      message: "User created succesfully!",
    });
  } catch (error) {
    console.log(error);
  }
};

export { signIn, login };
