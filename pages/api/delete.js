// pages/api/delete.js
const AWS = require('aws-sdk');
const { s3Config } = require('../../config').default;
const { query } = require('../../utils/db');

const s3 = new AWS.S3({
  accessKeyId: s3Config.accessKeyId,
  secretAccessKey: s3Config.secretAccessKey,
  region: s3Config.region
});

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { id, key } = req.body; // Assuming id of the image record and S3 key are provided

  try {
    // Delete from S3
    await s3.deleteObject({
      Bucket: s3Config.bucketName,
      Key: key
    }).promise();

    // Delete record from database
    await query('DELETE FROM images WHERE id = ?', [id]);

    res.status(200).json({ message: 'Image deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting image', error: error.message });
  }
};
