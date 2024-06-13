import React,{ useState } from 'react';

const Time=()=>{
    let time=new Date().toLocaleTimeString();
    const [btime,setbtime]=useState(time);
    const updatetime=()=>{
        let time=new Date().toLocaleTimeString();
        setbtime(time);  
    }
    setInterval(updatetime,1000);
    return(
<>
<h1>Time</h1>
<h1>{btime}</h1>
</>
    );
}


export default Time;
