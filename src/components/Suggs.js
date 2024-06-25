import React from 'react';
import img from '../images/img14.jpg';

function Suggs(props){
    return(
        <>
        <h2>Suggestions</h2>
        <div>
            <div style={{height:'40px',width:'100px',borderRadius:'50%',color:'white',display:'flex',flexDirection:'row'}}><img src={img} style={{height:'30px',width:'30px',borderRadius:'50%'}} />    Nikita</div>
        </div>
        </>
    )
}
export default Suggs;