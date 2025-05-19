import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';

export default function Feed() {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/api/videos').then(res => setVideos(res.data));
  }, []);

  const likeVideo = async (id) => {
    try {
      await axios.put(`http://localhost:8000/api/like/${id}`);
      setVideos(videos.map(v => v._id === id ? { ...v, likes: v.likes + 1 } : v));
    } catch (error) {
      console.error("Failed to like video:", error.response?.data || error.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-6 space-y-8 px-4">
      {/* Header with Upload Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Video Feed</h2>
        <button
          onClick={() => navigate('/upload')}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow"
        >
          + Upload Video
        </button>
      </div>

      {/* Video List */}
      {videos.length === 0 ? (
        <p className="text-center text-gray-500">No videos uploaded yet.</p>
      ) : (
        videos.map((video) => (
          <div key={video._id} className="bg-white p-4 rounded shadow">
            <h4 className="text-lg font-semibold mb-2">{video.title}</h4>
            <ReactPlayer
              url={`http://localhost:8000/uploads/${video.filename}`}
              controls
              width="100%"
              height="360px"
            />
            <button
              onClick={() => likeVideo(video._id)}
              className="mt-2 px-4 py-1 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
            >
              ❤️ {video.likes || 0}
            </button>
          </div>
        ))
      )}
    </div>
  );
}
