import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"

import { fetchFromAPI } from "../api/fetchFromAPI"
import VideoCard from "../components/VideoCard"
import Loader from "../components/Loader"

function SearchResults(){

const { query } = useParams()

const { data, isLoading } = useQuery({
queryKey:["search",query],
queryFn:()=>fetchFromAPI(`/search?part=snippet&q=${query}`)
})

if(isLoading) return <Loader/>

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

export default SearchResults