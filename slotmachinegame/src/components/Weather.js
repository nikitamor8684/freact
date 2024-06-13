import React,{useState} from 'react';

const Weather=()=>{
    const[val,setval]=useState("");
    const inputval=(event)=>{
        const place=event.target.value;
        setval(place);
    }
    const weather=`https://api.com.openweathermap.org/2.5/weather?q=${val}`;
    console.log(weather);
    return(
        <>
              <div className='searchbar'>
   <input  type="text" placeholder="search weather of anywhere" value={val} onChange={inputval} />
   <div>
    {/* {weather} */}
   </div>
   </div>
        </>
    )
}
export default Weather;