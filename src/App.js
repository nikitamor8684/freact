// import lnogo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import About from './components/About'
import React ,{useState} from 'react'
// import Index1 from './components/Index1'

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [mode,setmode]=useState('dark'); //whether dark mode is enabled or not 
  const [alert,setalert]=useState(null)

  const showalert=(message,type)=>{
setalert({
  msg:message,
  type:type
})
setTimeout(()=>{
setalert(null);
},1500)
  }
  const togglemode=()=>{
    if(mode==='light'){
  setmode('dark'); 
  document.body.style.backgroundColor='grey';
  document.title="Text  utiles-dark mode";
  // setInterval(() => {
  //   document.title="textutiles is amazing mode";
  // }, 2000);
  //   setInterval(() => {
  //   document.title=" install textutiles now";
  // }, 1200);
  showalert("dark mode has been enabled","success"); 
    }
    else{
  setmode('light');  
  document.body.style.backgroundColor='white'; 
  document.title="Textutiles-light mode";

  showalert("light mode has been enabled","success");
    }
  }
  return (
    
<>
{/* <Router> */}
<Nav title="textutiles" abouttext="about textutiles"  mode={mode} togglemode={togglemode}/>
<Alert alert={alert}/>
<div className='container my-3'>
<Textform showalert={showalert} heading="enter text to analyze here" mode={mode}/>
     
           {/* <Routes>
        <Route exact path="/" element={<Textform/>} />
        <Route exact path="/about" element={<About/>}/>
    </Routes> */}
      
        </div>
        {/* </Router> */}
{/* <About /> */}
{/* <Index1/> */}

</>   


  );
}

export default App;
