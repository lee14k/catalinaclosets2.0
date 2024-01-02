import AWS from 'aws-sdk';
import s3Config from '../config';

const s3 = new AWS.S3({
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET,
  region: process.env.BUCKET_REGION
});

export async function uploadFile(buffer, name, type) {
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: `${Date.now()}-${name}`,
    Body: buffer,
    ContentType: type,
    ACL: 'public-read'
  };

  return s3.upload(params).promise();
}
