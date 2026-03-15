import React from "react"; 
import "../styles/sidebar.css"

const categories=[
"All",
"Music",
"Gaming",
"Coding",
"Live",
"News",
"Sports"
]

function Sidebar({selectedCategory,setSelectedCategory}){

return(

<div className="sidebar">

{categories.map((cat)=>(
<button
key={cat}
className={selectedCategory === cat ? "active" : ""}
onClick={()=>setSelectedCategory(cat)}
>

{cat}

</button>
))}

</div>

)

}

export default Sidebar