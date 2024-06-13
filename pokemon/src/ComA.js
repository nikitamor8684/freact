import React,{useEffect, useState} from 'react';
import axios from "axios";

const ComA=()=>{
  const[num,setnum] = useState();
  const [name,setname]=useState();
  const[names,setnames]=useState();
  useEffect(()=>{
    async function getdata(){
        const res=await axios.get(`https://pokeapi.co/api/v2/ability/${num}/`);
        console.log(res.data.name);
        setname(res.data.name);
        setnames(res.data.names.length);
        console.log(res.data);
        console.log(res.data.url);
       
    }
    getdata();
  })
    return (
 <>
 <h1>you choose <span style={{color:'red'}}>{num}</span></h1>
 <h1>my name is<span style={{color:'red'}}> {name}</span></h1>
 <h1>i have<span style={{color:'red'}}> {names} names</span></h1>

 <select value={num} onChange={(event)=>{
setnum(event.target.value);
 }}>
    <option value="1">1</option>
    <option value="25">25</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>

 </select>
 </>
    )
}
export default ComA;