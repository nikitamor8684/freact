import React from 'react';
import '../App.css';
function PostGrid({image}){
    console.log(image);
    return(
            <div className="image-card" >
                        <img src={image.imgsrc}  style={{marginTop:"20px"}}/> 
              <div className="image-info">
              </div>
            </div>   
    );    
}

export default PostGrid;