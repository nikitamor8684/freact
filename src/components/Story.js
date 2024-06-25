import React from 'react';
import img from '../images/img14.jpg';

function Story(props){
    return(
        <>

<span style={{margin:'10px'}}>
    <img src={img} alt="Story Image"  style={{height:"80px",width:"90px",offset:"3px",border:"2px solid white",borderRadius:"50%"}}/> 
  </span>


        </>
    )
}
export default Story;
