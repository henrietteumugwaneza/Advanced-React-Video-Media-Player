import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchFromAPI } from "../api/fetchFromAPI";
import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";
import Loader from "../components/Loader";
import "../styles/feed.css";

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("Coding");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["videos", selectedCategory],
    queryFn: () => fetchFromAPI(`/search?part=snippet&q=${selectedCategory}&maxResults=20`),
  });

  return (
    <div className="feed-container">
      <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <div className="videos">
        {isLoading && <Loader />}
        {isError && <p style={{ color: "white" }}>Error loading videos</p>}
        {data?.items?.map((video) => {
          const vid = video?.id?.videoId;
          if (!vid) return null;
          return <VideoCard key={vid} video={video} />;
        })}
      </div>
    </div>
  );
}

export default Feed;
