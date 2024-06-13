import React,{useState} from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
// import Button from '@material-ui/icons/Button';
// import AddIcon from '@material-ui/icons/Add';
const Todo1=()=>{
    const [inputlist,setinputlist]=useState();
    const input=(event)=>{
setinputlist(event.target.value);
    }
    return(
        <>
        <div className='main_div'>
            <div className='center_div'>
                <br/>
<h1>TODO List</h1>
<br/>
<input type="text" placeholder="Add an item"  onChange={input}/>
<Button className="newbtn">
  <AddIcon />
</Button>
<br />
<ol>
    <li>
{inputlist}
    </li>
</ol>
<br />
            </div>
        </div>
        </>
    )
}
export default Todo1;