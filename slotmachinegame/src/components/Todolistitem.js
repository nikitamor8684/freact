import  React from "react";
import '../index.css';
const Todolistitem=(props)=>{
    return(
        <>
           <div className='todo_style'> 
    <i className="fa fa-close"  onClick={()=>{props.onSelect(props.id)}}></i>
    <li style={{float:'right'}}>{props.itemvalue}</li>
  
    </div>
        </>
    )
}
export default Todolistitem;