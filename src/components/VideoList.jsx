import React from 'react';
import { ListGroup } from 'react-bootstrap';
import videos from './videos.json';

const VideoList = ({ onVideoSelect }) => {
    
  return (
    <div className="video-list">
      <h3>Related Videos</h3>
      <ListGroup>
        {videos.map((video) => (
          <ListGroup.Item key={video.id} onClick={() => onVideoSelect(video.id)}>
            <img src={video.thumbnail} alt={video.title} className="thumbnail" />
            <div className="video-info">
              <h5>{video.title}</h5>
              <p>{video.views}</p>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default VideoList;
