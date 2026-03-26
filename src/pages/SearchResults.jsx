import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchFromAPI } from "../api/fetchFromAPI";
import VideoCard from "../components/VideoCard";
import Loader from "../components/Loader";
import "../styles/feed.css";

function SearchResults() {
  const { query } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["search", query],
    queryFn: () => fetchFromAPI(`/search?part=snippet&q=${query}&maxResults=20`),
  });

  if (isLoading) return <Loader />;

  return (
    <div style={{ padding: "16px 24px" }}>
      <h2 style={{ marginBottom: 16, fontSize: 18 }}>
        Results for: <span style={{ color: "#aaa" }}>{query}</span>
      </h2>
      <div className="videos">
        {data?.items?.map((video) => {
          const vid = video?.id?.videoId;
          if (!vid) return null;
          return <VideoCard key={vid} video={video} />;
        })}
      </div>
    </div>
  );
}

export default SearchResults;
