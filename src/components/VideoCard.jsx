import React from "react"; 
import { Link } from "react-router-dom"
import "../styles/videocard.css"

function VideoCard({video}){

const {snippet} = video

return(

<Link to={`/video/${video.id.videoId}`}>

<div className="videoCard">

<img
src={snippet.thumbnails.high.url}
alt={snippet.title}
/>

<div className="videoInfo">

<h4>{snippet.title}</h4>

<p>{snippet.channelTitle}</p>

</div>

</div>

</Link>

)

}

export default VideoCard