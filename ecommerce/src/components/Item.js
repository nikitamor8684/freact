import React,{useState} from 'react';
const Item=(props)=>{
    const[imgsrc,setimgsrc]=useState(props.imgsrc);
    const imgchng=()=>{
setimgsrc(props.imgsrc2);
    }
    const imgchng1=()=>{
      setimgsrc(props.imgsrc);
    }
    return(
      <>
  
      <div style={{marginTop:'100px'}}>
      
<div className=" col-md-4">
<div class="card"  id='item' style={{width:'17rem'}}>
  <img src={imgsrc} class="card-img-top" onMouseOver={imgchng} onMouseOut={imgchng1} alt="..."  style={{height:'300px'}}/>
  <div className="cart">
    <button>
  <i className="bi bi-cart3"></i>
  <svg xmlns="http://www.w3.org/2000/svg"  height="20px" width="20px" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
</button>
<button>
<i class="bi bi-heart-fill"></i>
<svg xmlns="http://www.w3.org/2000/svg"  height="20px" width="20px" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>
</button>
            </div>
</div>
 </div>
 </div>
      </>  
    )
}

export default Item;
