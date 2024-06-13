import React from 'react';
const Check=(props)=>{
    return(
        <>
                        <div className="card my-2 check" style={{ width:'40% ',margin:'100px 60px'}}>
        <img src={props.imgsrc} className="card-img-top" alt="..." style={{height:'500px',width:'500px'}}/>
        <div className="card-box check1" style={{width:'50%',height:'150px',padding:'5px',margin:'300px 90px'}} >
          <h5 style={{ marginLeft:'80px'}}>{props.text}</h5>
          <p >{props.text1}</p>
          <div className="btn btn-dark text-light" style={{marginLeft:'50px'}}>Shop now</div>
        </div>
      </div>
      
    
        </>
    )
}
export default Check;