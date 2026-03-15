import React from "react"; 
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { fetchFromAPI } from "../api/fetchFromAPI"

import Sidebar from "../components/Sidebar"
import VideoCard from "../components/VideoCard"
import Loader from "../components/Loader"

import "../styles/feed.css"

function Feed(){

const [selectedCategory,setSelectedCategory] = useState("Coding")

const {data,isLoading,isError} = useQuery({

queryKey:["videos",selectedCategory],

queryFn:()=>fetchFromAPI(`/search?part=snippet&q=${selectedCategory}`)

})

if(isLoading) return <Loader/>
if(isError) return <h2>Error loading videos</h2>

return(

<div className="container">

<Sidebar
selectedCategory={selectedCategory}
setSelectedCategory={setSelectedCategory}
/>

<div className="videos">

{data.items.map((video)=>(
<VideoCard
key={video.id.videoId}
video={video}
/>
))}

</div>

</div>

)

}

export default Feed