// pages/upload.js
import axios from 'axios';
import { useState } from 'react';

export default function Upload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
 const response = await axios.post('/api/upload', formData, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

console.log('Upload response:', response.data);
alert('File uploaded successfully');
  } catch (error) {
  console.error('Error uploading file:', error);
  alert('Error uploading file: ' + (error.response?.data || error.message));
}
  };

  return (
    <div>
      <h1>Upload Image</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
