// pages/api/delete.js
import AWS from 'aws-sdk';

// Initialize the S3 client
const s3 = new AWS.S3({
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET,
  region: process.env.BUCKET_REGION
});

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { key } = req.body; // Assuming the S3 key is provided in the request body

  try {
    // Delete the object from S3
    await s3.deleteObject({
      Bucket: process.env.BUCKET_NAME,
      Key: key
    }).promise();

    res.status(200).json({ message: 'Image deleted successfully from S3' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting image from S3', error: error.message });
  }
}
