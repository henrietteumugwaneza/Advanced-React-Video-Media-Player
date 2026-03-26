import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ReactPlayer from "react-player";
import { fetchFromAPI } from "../api/fetchFromAPI";
import Loader from "../components/Loader";
import "../styles/player.css";

function formatCount(n) {
  if (!n) return "0";
  const num = parseInt(n);
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
  return num.toLocaleString();
}

function VideoDetails() {
  const { id } = useParams();
  const [expanded, setExpanded] = useState(false);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["video", id],
    queryFn: () => fetchFromAPI(`/videos?part=snippet,statistics&id=${id}`),
  });

  const { data: related } = useQuery({
    queryKey: ["related", id],
    queryFn: () => fetchFromAPI(`/search?part=snippet&relatedToVideoId=${id}&type=video&maxResults=15`),
  });

  if (isLoading) return <Loader />;
  if (isError) return <h2 style={{ color: "white", padding: 20 }}>Failed to load video</h2>;

  const video = data?.items?.[0];
  const { snippet, statistics } = video || {};
  const description = snippet?.description || "";

  return (
    <div className="vd-wrapper">
      {/* Left: Player + Info */}
      <div className="vd-main">
        <div className="vd-player">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
            playing
            width="100%"
            height="100%"
          />
        </div>

        <h1 className="vd-title">{snippet?.title}</h1>

        <div className="vd-meta">
          <div className="vd-channel">
            <div className="vd-avatar">{snippet?.channelTitle?.[0]}</div>
            <div>
              <Link to={`/channel/${snippet?.channelId}`} className="vd-channel-name">
                {snippet?.channelTitle}
              </Link>
              <p className="vd-subs">YouTube Channel</p>
            </div>
            <button className="vd-subscribe">Subscribe</button>
          </div>

          <div className="vd-actions">
            <button className="vd-btn">
              <span>👍</span> {formatCount(statistics?.likeCount)}
            </button>
            <button className="vd-btn">
              <span>👎</span> Dislike
            </button>
            <button className="vd-btn">
              <span>↗</span> Share
            </button>
            <button className="vd-btn">
              <span>⋯</span>
            </button>
          </div>
        </div>

        <div className="vd-description">
          <p className="vd-views">
            {formatCount(statistics?.viewCount)} views &nbsp;·&nbsp;{" "}
            {new Date(snippet?.publishedAt).toLocaleDateString("en-US", {
              year: "numeric", month: "short", day: "numeric",
            })}
          </p>
          <p className={`vd-desc-text ${expanded ? "expanded" : ""}`}>{description}</p>
          {description.length > 200 && (
            <button className="vd-more" onClick={() => setExpanded(!expanded)}>
              {expanded ? "Show less" : "...more"}
            </button>
          )}
        </div>
      </div>

      {/* Right: Related Videos */}
      <div className="vd-related">
        <h3 className="vd-related-title">Up next</h3>
        {related?.items?.map((item) => {
          const vid = item?.id?.videoId;
          if (!vid) return null;
          return (
            <Link to={`/video/${vid}`} key={vid} className="vd-related-card">
              <img
                src={item.snippet?.thumbnails?.medium?.url}
                alt={item.snippet?.title}
                className="vd-related-thumb"
              />
              <div className="vd-related-info">
                <p className="vd-related-vtitle">{item.snippet?.title}</p>
                <p className="vd-related-channel">{item.snippet?.channelTitle}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default VideoDetails;
