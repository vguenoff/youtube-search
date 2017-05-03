import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
  const title = video.snippet.title;
  const url = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="VideoListItem">
      <div className="video-list-media">
        <div className="media-left">
          <img src={url} alt="" className="media-object" />
        </div>
        <div className="media-body">
          <div className="media-heading">{title}</div>
        </div>
      </div>

    </li>
  );
};

export default VideoListItem;
