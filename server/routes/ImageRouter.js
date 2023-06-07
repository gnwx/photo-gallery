import express from "express";
import multer, { memoryStorage } from "multer";
import { getUserPresignedUrls, uploadToS3 } from "../utils/s3.js";
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

const storage = memoryStorage();
const upload = multer(storage);

router.use(verifyToken);

router.post("/upload", upload.single("photoURL"), async (req, res) => {
  const { file, user } = req;

  const { err, key } = await uploadToS3({
    file,
    userId: user,
  });

  if (err) return res.status(500).json({ message: err.message });
  return res.status(201).json({ key });
});

router.get("/", async (req, res) => {
  const { user } = req;
  const { presignedUrls, error } = await getUserPresignedUrls(user);
  if (error) return res.status(400).json({ message: error.message });

  return res.json(presignedUrls);
});

export default router;
