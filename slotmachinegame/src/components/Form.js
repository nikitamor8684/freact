import React ,{useState} from 'react';

const Form=()=>{
    
    const [fullname,setfullname]=useState({
        fname:'',
        fpass:'',
        femail:'',
        fnum:'',
    });
    const[fname,setfname]=useState({
    lname:'',
    lpass:'' ,
    lemail:'',
    lnum:'', 
    })
   
  

    const showval=(event)=>{
        event.preventDefault();
    setfname({
      lname:fullname.fname,
      lpass:fullname.fpass,
      lemail:fullname.femail,
      lnum:fullname.fnum
    });    
    }

    const inputval=(event)=>{

        const {name,value}=event.target;
        setfullname((prevalue)=>{
            return{
                ...prevalue,
                [name]:value,                
            }
        })
    }




//  const inputval=(event)=>{   
 

// const value=event.target.value;
// const name=event.target.name;

// setfullname((prevalue)=>{
// if(name==='fname'){
//     return{
//         fname:value,
//         fpass:prevalue.fpass,
//         femail:prevalue.femail,
//         fnum:prevalue.fnum
//     };  
// }else if(name==='fpass'){
// return{
//     fname:prevalue.fname,
//     fpass:value,
//     femail:prevalue.femail,
//     fnum:prevalue.fnum
// };
// }else if(name==='femail'){
//     return{
//         fname:prevalue.fname,
//         fpass:prevalue.fpass,
//         femail:value,
//         fnum:prevalue.fnum
//     };
// }
// else if(name==='fnum'){
//     return{
//         fname:prevalue.fname,
//         fpass:prevalue.fpass,
//         femail:prevalue.femail,
//         fnum:value 
//     }
// }
// })
 
// }

 // const [fname,setfname]=useState('');
    // const[pass,setpass]=useState('');
    //   const [fpass,setfpass]=useState('');
    // const showval=(event)=>{
        // event.preventDefault();
   // setfname(name);
    // setfpass(pass);
// }
// const inputval=(event)=>{
// setfname(event.target.value);
// setpass(event.target.value);
// }

// const inputval2=(event)=>{
// setfname(event.target.value);
// setpass(event.target.value);
// }

    return(
        <>


        <form onSubmit={showval}>
        <h1>Hello,{fname.lname} {fname.lpass}</h1>
        <p>{fname.lemail}</p>
        <p>{fname.lnum}</p>
<input className="form-control form-control-lg" style={{width:'500px'}} type="text" placeholder='enter your name'  onChange={inputval}  name="fname"/><br/>
<input className="form-control form-control-lg" style={{width:'500px'}}  type="text" placeholder='enter your password'  onChange={inputval} name="fpass" /><br/>
{/* onChange={inputval2} */}
<input className="form-control form-control-lg" style={{width:'500px'}}  type="email" placeholder='enter your email'  onChange={inputval} name="femail" /><br/>
<input className="form-control form-control-lg" style={{width:'500px'}}  type="number" placeholder='enter your mobile no.'  onChange={inputval} name="fnum" /><br/>

<button className='btn bg-primary' type="submit">Click me</button>
        </form>
        </>
    
    )
}
export default Form;