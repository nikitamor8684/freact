import React from 'react';

        const Slotm=(props)=>{
 <h1 className="heading_style">🎰 Welcome to <span style={{fontWeight:'bold'}}>Slot Machine game</span>🎰</h1>

  // let x='😃';
  // let y='😃';
  // let z='😃';
if((props.x===props.y)&& (props.y===props.z)){
  return(
    <>
    <div className='slot_inner'>
<h1>{props.x}{props.y}{props.z}</h1>
<h1>This is a matching</h1>
<hr />

    </div>
    </>
  );
}else{
  return(
    <>
    <div className='slot_inner'>
<h1>{props.x}{props.y}{props.z}</h1>
<h1>This is not matching</h1>
<hr />

    </div>
    </>
  );
}
}
 export default Slotm;