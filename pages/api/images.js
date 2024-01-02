import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';

export default async function handler(req, res) {
  const client = new S3Client({
    region: process.env.BUCKET_REGION,
    credentials: {
      accessKeyId: process.env.S3_KEY,
      secretAccessKey: process.env.S3_SECRET,
    },
  });

  try {
    const command = new ListObjectsV2Command({
      Bucket: process.env.BUCKET_NAME,
      Prefix: 'uploads/', // Specify the folder name here
    });
    const response = await client.send(command);

    // Check if Contents is defined and map the keys
    const imageKeys = response.Contents ? response.Contents.map(item => item.Key) : [];
    res.status(200).json({ imageKeys });
  } catch (error) {
    console.error('Error listing S3 objects:', error);
    res.status(500).json({ error: error.message });
  }
}