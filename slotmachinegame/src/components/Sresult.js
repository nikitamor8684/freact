import  React from 'react';

const Sresult=(props)=>{
    const img=`https://source.unsplash.com/400x400/?${props.srcname}`;
    return(
        <>
        <div>
            <img  src={img} alt="search"/>
        </div>
        </>
    )
}
export default Sresult;