import React, { useState, useEffect } from 'react';
import faker from 'faker';
import axios from 'axios';
import './style.scss'

function VideoCard(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('https://fakevideoapi.com/videos');
        setVideoUrl(response.data.url);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideoUrl();
  }, []);

  function handleVideoLoad() {
    setIsLoading(false);
  }

  return (
    <div className="video-card">
      {isLoading && (
        <div className="loading-overlay">
          <i className="fa fa-spinner fa-spin"></i>
          <p>Processando...</p>
        </div>
      )}
      <div className="video-wrapper">
        <video
          src={videoUrl}
          onLoadedData={handleVideoLoad}
          controls={true} // remove a barra de reprodução
          appearance="none"
        />
      </div>
      <div className="video-info">
        <h2 className="video-title">{props.title}</h2>
        <p className="video-description">{props.description}</p>
      </div>
    </div>
  );
}

export default VideoCard;

