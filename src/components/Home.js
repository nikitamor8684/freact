import React from 'react';
import img from '../images/img14.jpg';
import Story from './Story';
import Sidebar from './Sidebar';
import Post from './Post';
import Suggs from './Suggs.js';
import Data from'../Data.json';

function Home(){
    return(
        <>
        <div style={{display:'flex',flexDirection:'row'}}>
            <div style={{display:'flex',flexDirection:'column',width:'20%'}}>  <Sidebar /></div>
      
      <div style={{width:'60%',display:'flex',flexDirection:'column'}}>
            {/* <div style={{diplay:'flex',flexDirection:'column',width:'80%'}}> */}
                <div style={{display:'flex',flexDirection:'row',overflowX:'auto',overflowY:'hidden',scrollbarWidth:'none',height:'100px',width:'100%'}}>
              
                <Story imgsrc ={img} />
           <Story imgsrc ={img} />
            <Story imgsrc ={img} />
            <Story imgsrc ={img} />
           <Story imgsrc ={img} />
           <Story imgsrc ={img} />
           <Story imgsrc ={img} />
           <Story imgsrc ={img} />
           <Story imgsrc ={img} /> 
           <Story imgsrc ={img} />
           <Story imgsrc ={img} />
            <Story imgsrc ={img} />
           <Story imgsrc ={img} />
           
           </div>
   <div style={{width:'80%'}}> 
   {Data.map((post) =>{
    return(
    <Post user={post.user}
    imgsrc={post.postImage} 
    likes={post.Likes}
    timeline={post.Timestamp}
    />
    );
   })}
    </div>
            
     </div>
     {/* {Data.map((post) =>{
    return( */}
        <div style={{ width:"20%",marginLeft:'20px',display:'flex',flexDirection:'column'}}><Suggs /></div>
    {/* );
    })} */}
       
        </div>
        </>
    )
       
    
}
export default Home;