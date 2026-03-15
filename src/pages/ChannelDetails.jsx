import React from "react";  
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"

import { fetchFromAPI } from "../api/fetchFromAPI"
import VideoCard from "../components/VideoCard"

function ChannelDetails(){

const {id} = useParams()

const {data} = useQuery({

queryKey:["channelVideos",id],

queryFn:()=>fetchFromAPI(`/search?channelId=${id}&part=snippet`)

})

return(

<div className="videos">

{data?.items?.map((video)=>(
<VideoCard
key={video.id.videoId}
video={video}
/>
))}

</div>

)

}

export default ChannelDetails