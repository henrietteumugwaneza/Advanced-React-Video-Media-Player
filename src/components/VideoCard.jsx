import React from "react";
import { Link } from "react-router-dom";
import "../styles/videocard.css";

function VideoCard({ video }) {
  const { snippet } = video;
  const videoId = video?.id?.videoId || video?.id;

  if (!videoId) return null;

  return (
    <Link to={`/video/${videoId}`} className="videoCard">
      <div className="vc-thumb-wrap">
        <img
          src={snippet.thumbnails?.high?.url || snippet.thumbnails?.medium?.url}
          alt={snippet.title}
          className="vc-thumb"
        />
      </div>
      <div className="vc-info">
        <div className="vc-avatar">{snippet.channelTitle?.[0]}</div>
        <div className="vc-meta">
          <p className="vc-title">{snippet.title}</p>
          <Link
            to={`/channel/${snippet.channelId}`}
            className="vc-channel"
            onClick={(e) => e.stopPropagation()}
          >
            {snippet.channelTitle}
          </Link>
          <p className="vc-date">
            {new Date(snippet.publishedAt).toLocaleDateString("en-US", {
              year: "numeric", month: "short", day: "numeric",
            })}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;
