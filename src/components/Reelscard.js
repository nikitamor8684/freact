import React from "react";

function Reelscard(props) {
  return (
    // console.log(props.reel)
    <>
      <div className="reel-card">
        {/* <video  >
        <source src={props.reel} type='video/'/>
    </video> */}
        <img src={props.reel} />
      </div>
    </>
  );
}
export default Reelscard;