import React, { useState } from 'react';
import VideoPlayer from './components/VideoPlayer';
import CommentSection from './components/CommentSection';
import VideoList from './components/VideoList';
import './video.css';
import videos from './components/videos.json'

const App = () => {
  const [selectedVideoId, setSelectedVideoId] = useState(videos[0].id); // Default to the first video

  const handleVideoSelect = (videoId) => {
    setSelectedVideoId(videoId);
  };
  return (
    <div className='app-contatiner'>
      <div className='video-player'>
        <VideoPlayer videoId={selectedVideoId} />
      </div>
      <div className='comment-section'>
        <CommentSection />
      </div>
      <div className='video-list'>
        <VideoList onVideoSelect={handleVideoSelect}/>
      </div>
    </div>
  );
};

export default App;
