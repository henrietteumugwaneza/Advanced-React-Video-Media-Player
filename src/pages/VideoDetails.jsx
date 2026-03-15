import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { fetchFromAPI } from "../api/fetchFromAPI";
import VideoPlayer from "../components/VideoPlayer";
import Loader from "../components/Loader";

function VideoDetails() {

  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["video", id],
    queryFn: () => fetchFromAPI(`/videos?part=snippet,statistics&id=${id}`)
  });

  if (isLoading) return <Loader />;
  if (isError) return <h2>Failed to load video</h2>;

  const video = data?.items?.[0];

  return (
    <div>

      <VideoPlayer videoId={id} />

      <h2>{video?.snippet?.title}</h2>

      <p>{video?.statistics?.viewCount} views</p>

      <p>{video?.snippet?.description}</p>

    </div>
  );
}

export default VideoDetails;