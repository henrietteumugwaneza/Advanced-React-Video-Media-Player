import React from "react";  
function CategoryPills(){

const pills=[
"All",
"Music",
"Gaming",
"Live",
"News"
]

return(

<div className="pills">

{pills.map((pill)=>(
<button key={pill}>
{pill}
</button>
))}

</div>

)

}

export default CategoryPills