import React from "react";  
import ReactPlayer from "react-player"
import "../styles/player.css"

function VideoPlayer({videoId}){

return(

<div className="player">

<ReactPlayer
url={`https://www.youtube.com/watch?v=${videoId}`}
controls
width="100%"
height="500px"
/>

</div>

)

}

export default VideoPlayer