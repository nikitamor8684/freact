import React,{useState} from 'react';
import "../index.css";
import Sresult from './Sresult'

const Search=()=>{
    const [img,setimg]=useState(" ");
    const inputval=(event)=>{
const e=event.target.value;
setimg(e);
    }
    return(
        <>
        <div className='searchbar'>
   <input  type="text" placeholder="search anything"  value={img} onChange={inputval} />
   </div>
   {img===" "? null: <Sresult srcname={img}/>} 
   
  
        </>
    )
}
export default Search;