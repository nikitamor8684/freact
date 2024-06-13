import React from "react";
import '../index.css';
const Grettings=()=>{
const date=new Date();
const cssStyle={};
let hour=date.getHours();
let Grettings='';
    if(hour>=1&&hour<=11){
        Grettings= "Good morning";
        cssStyle.color='red';
    }else if(hour>=12&&hour<=19){
        Grettings= "Good Afternoon";
        cssStyle.color='green';
    }else{
        Grettings= "Good night";
        cssStyle.color='orange';
    }

    return(
<>
<div className="box">
<h1>Hello Everyone,<span style={cssStyle}>{Grettings}</span></h1>
</div>
</>
    );
}
export default Grettings;