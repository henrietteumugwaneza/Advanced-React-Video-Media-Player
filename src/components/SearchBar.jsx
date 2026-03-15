import React from "react"; 
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar(){

const [search,setSearch] = useState("")
const navigate = useNavigate()

const handleSearch = (e)=>{
e.preventDefault()

if(search){
navigate(`/search/${search}`)
}
}

return(

<form onSubmit={handleSearch}>

<input
type="text"
placeholder="Search"
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<button type="submit">Search</button>

</form>

)

}

export default SearchBar