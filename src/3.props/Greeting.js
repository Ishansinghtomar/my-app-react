//prop to function component
import React from "react";
const Greeting = (props) =>{
let {name,skill}=props
return <div>
    <h3>Name:{name} skill:{skill}</h3>
</div>


}
export default Greeting