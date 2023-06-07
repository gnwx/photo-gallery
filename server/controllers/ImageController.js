import { getUserPresignedUrls, uploadToS3 } from "../utils/s3.js";

const uploadImage = async (req, res) => {
  const { file, user } = req;

  const { err, message } = await uploadToS3({
    file,
    userId: user,
  });

  if (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
  return res.status(201).json({ success: true, message });
};

const getImage = async (req, res) => {
  const { user } = req;
  const { presignedUrls, error } = await getUserPresignedUrls(user);

  if (error) {
    return res.status(400).json({ message: error.message });
  } else {
    return res.status(200).json({ presignedUrls });
  }
};

export { uploadImage, getImage };
