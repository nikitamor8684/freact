import React, { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

const Product=(props)=>{
  const location = useLocation();
  console.log(location);
  const [val,setval]=useState(1);
  const data = location.state;
  const [picture, setpicture] = useState(data.picture1);


  const addtocart=()=>{
    // const Itemimg=createContext();
  }
  
  const setpic=(pic)=>{
    setpicture(pic.target.src);
  }
 const increase=()=>{
setval(val+1);
  }
  const decrease=()=>{
    setval(val-1);
    if(val===1){
      setval(1);
    }
  
      }
      const sizebtn=(size)=>{
size.target.classList.toggle('bg-success');
size.target.classList.toggle('text-light');
      }
 
  return(
    <>
    {/* <Itemimg.Provider value={picture}></Itemimg.Provider> */}
<div className="pro">
<div classNameName='row box'>
<div className="card product">
  <img src={data.picture1} className="card-img-top"  onMouseOver={setpic} alt="..."/>

</div>
<div className="card product">
<img src={data.picture2} className="card-img-top"  onMouseOver={setpic} alt="..."/>
</div>
<div className="card product" >
  <img src={data.picture3} className="card-img-top" onMouseOver={setpic} alt="..."/>
</div>
<div className="card product" >
  <img src={data.picture4} className="card-img-top" onMouseOver={setpic} alt="..."/>
</div>
</div>

<div className="product1">
<img src={picture} alt=".." style={{height:'600px',width:'600px'}}/>
</div>


<div className="product2">
  <h2>Fashion Hub</h2>
  <h4 className="my-3">Rs. {data.price}</h4>
            <p className="my-3">Tax included.</p>
            <div className="mt-5 mb-2">
                <input type="submit" className="btn border-primary mx-1" onClick={sizebtn} id="size" value="30" />
                <input type="submit" className="btn border-primary mx-1"  onClick={sizebtn} id="size" value="32" />
                <input type="submit" className="btn border-primary mx-1" onClick={sizebtn} id="size" value="34" />
                <input type="submit" className="btn border-primary mx-1" onClick={sizebtn} id="size" value="36" />
                <input type="submit" className="btn border-primary mx-1" onClick={sizebtn} id="size" value="38" />
            </div>
            <div className="mt-4">
            <p className="my-3">No. of Products</p>
            <button className="btn btn-danger mx-2" onClick={decrease} style={{display:'inline'}}>-</button>
            <input type="text" className="form-control" id="inputEmail4" value={val} min="1" style={{display:'inline-block',width:'45px'}} />
            <button className="btn btn-danger mx-2" onClick={increase}>+</button>
            </div>
            <div className="col-md-12 my-3 d-grid gap-2">
                <button className="btn btn-danger" onClick={addtocart}>ADD TO CART</button>
              </div>
</div>


</div>
</>
  )
}

export default Product;
// export { Itemimg };



