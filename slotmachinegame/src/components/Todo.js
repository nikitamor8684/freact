import React,{useState} from 'react';
import '../index.css';
import Todolistitem from './Todolistitem';


const Todo=()=>{
    const [inputlist,setinputlist]=useState();
    const [list,setlist]=useState([]);
  const  item=(event)=>{
setinputlist(event.target.value);
    }
    const setitem=()=>{
        setlist((olddata)=>{
            return[...olddata,inputlist]
        });
      setinputlist('');  
    }
    const deleteitem=(id)=>{
      console.log("deleted");

      setlist((olddata)=>{
        return olddata.filter(( arrElem , index)=>{
    return index !== id;
  
        })
      })
    }
    return(
<>
<div className="main_div">
<div className='center_div'>
<br />
<h1 style={{backgroundColor:'purple',color:'white'}}>Todo List</h1>
<br />
<input type="text" placeholder='Add a item' onChange={item} value={inputlist}/>
<button className='btn' onClick={setitem}>+</button>
<ol class="todo-list">
 {list.map((itemvalue,index)=>{
    return (
            <>
  
    <Todolistitem  key={index} id={index}  itemvalue={itemvalue} onSelect={deleteitem}/>
     </> 
        
    )

 })}
</ol>
</div>
</div>
</>
    )
}
export default Todo;