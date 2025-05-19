import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Upload() {
  const [title, setTitle] = useState('');
  const [video, setVideo] = useState(null);
  const navigate = useNavigate();

const submit = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append('title', title);
  formData.append('video', video);

  try {
    await axios.post('http://localhost:8000/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    navigate('/feed');
  } catch (error) {
    console.error("Upload failed:", error.response?.data || error.message);
    alert("Upload failed");
  }
};


  return (
    <div className="flex justify-center mt-10">
      <form onSubmit={submit} className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4">
        <h2 className="text-2xl font-semibold text-center">Upload Video</h2>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
        <input
          type="file"
          accept="video/*"
          onChange={(e) => setVideo(e.target.files[0])}
          className="w-full px-3 py-2 border rounded"
        />
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Upload
        </button>
      </form>
    </div>
  );
}
