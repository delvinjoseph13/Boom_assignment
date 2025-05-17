import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';

export default function Feed() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/videos').then(res => setVideos(res.data));
  }, []);

  const likeVideo = async (id) => {
    await axios.post(`http://localhost:8000/api/like/${id}`);
    setVideos(videos.map(v => v._id === id ? { ...v, likes: v.likes + 1 } : v));
  };

  return (
    <div className="max-w-3xl mx-auto mt-6 space-y-8">
      <h2 className="text-3xl font-bold text-center mb-4">Video Feed</h2>
      {videos.map((video) => (
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
            className="mt-2 px-4 py-1 bg-pink-500 text-white rounded hover:bg-pink-600"
          >
            ❤️ {video.likes}
          </button>
        </div>
      ))}
    </div>
  );
}
