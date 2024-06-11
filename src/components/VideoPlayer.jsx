import React, { useEffect, useState, useRef } from 'react';
import videos from './videos.json';

const VideoPlayer = ({ videoId }) => {
  const videoRef = useRef(null);
  const [videoLikes, setLikes] = useState(null);
  const video = videos.find((video) => video.id === videoId);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();  // Reload the video when videoId changes
    }
  }, [videoId]);

  if (!video) {
    return <div>Video not found</div>;
  }
  const { src, title, author } = video;

  const videoLikeClick = () => {
    if (isAuthenticated()) {
      setLikes(videoLikes + 1);
    } else {
      alert('Please log in to like the video');
    }
  };
  const shareVideoClick = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: 'Check out this video!',
          url: window.location.href
        });
        console.log('Video shared successfully');
      } catch (error) {
        console.error('Error sharing video:', error.message);
      }
    } else {
      alert('Web Share API is not supported in this browser.');
    }
  };
  return (
    <div className='video'>
      <video ref={videoRef} width="1038" height="534" controls key={videoId}>
        <source src={ src } type="video/mp4" />
      </video>
      <div className='video-accessories'>
        <div className="video-title">
          <h1>{title}</h1>
        </div>
        <div className='video-buttons'>
          <button className='video-like-button' onClick={videoLikeClick}> 👍 </button>
          <span className='video-likes-counter'> {videoLikes} </span>
          <button className="dislike-button"> 👎 </button>
          <button className="share-button" onClick={shareVideoClick}> Share </button>
        </div>
      </div>
      <div className="author-section">
        <img alt="Avatar" className="author-avatar" src={author.avatar} />
        <div className="author-info">
          <span className='author-name'>{author}</span>
        </div>
      </div>
    </div>

  );
};

export default VideoPlayer;
