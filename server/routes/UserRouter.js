import express from "express";
import { signIn, login } from "../controllers/UserController.js";
const router = express.Router();

router.post("/login", login);

router.post("/signin", signIn);

export default router;
