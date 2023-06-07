import express from "express";
import { verifyToken } from "../middlewares/auth.js";
import { upload } from "../utils/multer.js";
import { getImage, uploadImage } from "../controllers/ImageController.js";

const router = express.Router();

router.use(verifyToken);

router.post("/upload", upload.single("photoURL"), uploadImage);

router.get("/", getImage);

export default router;
