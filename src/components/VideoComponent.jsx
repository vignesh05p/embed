import React from 'react';
import './VideoComponent.css';
import videoSrc from '../assets/img/vi.mp4';

const VideoComponent = () => {
  return (
    <div className="video-wrapper">
      <video className="video-content" autoPlay muted loop playsInline>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
