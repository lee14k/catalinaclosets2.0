const formidable = require('formidable');
import { S3, PutObjectCommand } from '@aws-sdk/client-s3';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  console.log('Received request');

  if (req.method !== 'POST') {
    console.log('Incorrect method');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const form = new formidable.IncomingForm();
  form.maxFileSize = 200 * 1024 * 1024; // Set max file size (optional)

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error('Error parsing form:', err);
      return res.status(500).json({ error: 'Error parsing the form data' });
    }

    console.log('Fields:', fields);
    console.log('Files:', files);

    const file = files.file[0]; // Adjusted to access the first file
    if (!file) {
      return res.status(400).json({ error: 'No file provided' });
    }

    const client = new S3({
      logger: console,
      region: process.env.BUCKET_REGION,
      credentials: {
        accessKeyId: process.env.S3_KEY,
        secretAccessKey: process.env.S3_SECRET,
      },
    });

    const fileStream = fs.createReadStream(file.filepath);
    fileStream.on('error', function(err) {
      console.error('File Stream Error:', err);
      return res.status(500).json({ error: 'Error reading file' });
    });
console.log(process.env.S3_BUCKET_NAME)
    const uploadParams = {
      Bucket: process.env.BUCKET_NAME,
      Key: `uploads/${file.originalFilename}`, // Using original filename
      Body: fileStream,
      ContentType: file.mimetype,
    };

    client.send(new PutObjectCommand(uploadParams))
      .then(() => {
        console.log('Upload successful');
        return res.status(200).json({ message: 'File uploaded successfully' });
      })
      .catch(uploadError => {
        console.error('Error uploading to S3:', uploadError);
        return res.status(500).json({ error: 'Error uploading to S3' });
      });
  });
}

