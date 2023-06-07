import {
  GetObjectCommand,
  ListObjectsV2Command,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { v4 as uuidv4 } from "uuid";

const BUCKET_NAME = process.env.AWS_BUCKET_NAME;
const ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
const ACCESS_KEY_SECRET = process.env.AWS_ACCESS_KEY_SECRET;
const REGION = process.AWS_REGION;

const s3 = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: ACCESS_KEY_SECRET,
  },
});

export const uploadToS3 = async ({ file, userId }) => {
  const key = `${userId}/${uuidv4()}`;

  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
    Body: file.buffer,
    ContentType: file.mimetype,
  });

  try {
    await s3.send(command);
    return { key };
  } catch (err) {
    console.log(err);
    return { err };
  }
};

const getImageKeysByUser = async (userId) => {
  const command = new ListObjectsV2Command({
    Bucket: BUCKET_NAME,
    Prefix: userId,
  });

  const { Contents = [] } = await s3.send(command);

  return Contents.map((content) => content.Key);
};

export const getUserPresignedUrls = async (userId) => {
  try {
    const imageKeys = await getImageKeysByUser(userId);

    const presignedUrls = await Promise.all(
      imageKeys.map((key) => {
        const command = new GetObjectCommand({
          Bucket: BUCKET_NAME,
          Key: key,
        });
        return getSignedUrl(s3, command, { expiresIn: 900 });
      })
    );

    return { presignedUrls };
  } catch (error) {
    console.log(error);
  }
};
