import React from 'react';
import img from '../images/img14.jpg';
import Data from '../Data.json';
function Post(props){
    console.log(props.imgsrc);

    return(
        <>
              <div className="post" style={{display:'flex',flexDirection:'column'}}>
        <div className="header" style={{display:'flex',justifyContent:'space-between'}}>
            {/* <img src={img.src} alt="Profile Picture" /> */}
            <span style={{height:'40px',width:'40px',backgroundColor:'rgba(244,244,244,0.128)',borderRadius:'50%',padding:'10px 15px '}}>{img.src} </span>
            <b>{props.user}  {props.timeline}</b>
            <i className="fas fa-ellipsis-h"  style={{marginLeft:'304px'}}></i>

        </div>
        <div className="image" style={{height:'400px'}}>
            <img src={props.imgsrc} alt="Post Image" style={{height:'400px'}} />
        </div>

        <div className="actions" >
            <i className="fas fa-heart" style={{margin:'4px'}}></i>
            <i className="fas fa-comment" style={{margin:'4px'}}></i>
            <i className="fas fa-paper-plane"style={{margin:'4px'}}></i>
            <i className="fas fa-bookmark"  style={{marginLeft:'380px'}}></i>
<p> {props.likes} likes </p>
<div className="caption">
            <p>This is the caption for the post.</p>
        </div>
        </div>
    
    </div>
        </>
    )
}
export default Post;