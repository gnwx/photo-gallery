import express from "express";
import userRouter from "./UserRouter.js";
import imageRouter from "./ImageRouter.js";
const router = express.Router();

router.use("/user", userRouter);
router.use("/image", imageRouter);

export default router;
