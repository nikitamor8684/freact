import axios from 'axios';
// import {Navbar} from './components/Navbar.js';
function App() {

  // axios.get('http://localhost:3000/posts')
  // axios.post('http://localhost:3000/posts',{
  //   "id":"1",
  //   "author":"nikita"
  // })
  // axios.put('http://localhost:3000/posts/1',{
    
  //   "nm":"nikita"
  // })
  axios.delete('http://localhost:3000/posts/1')
  .then((res)=>{
    console.log(res);
  })
  .catch((err)=>{
    console.log(err);
  })

  return (
  //   <div className="App">
  // <Navbar />
  //   </div>
  <>
  
  </>
  );
}

export default App;
// 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