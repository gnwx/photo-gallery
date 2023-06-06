import express from "express";
import userRouter from "./UserRouter.js";
const router = express.Router();

router.use("/user", userRouter);
// router.use("/image",imageRouter)
// router.use("/upload",uploadRouter)

export default router;
