
import './App.css';
import './bootstrap.min.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Search from './components/Search';
import Explore from './components/Explore';
import Post from './components/Post';
import Profile from './components/Profile';
import Data from './Data.json';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
<>
<Router>
<Routes> 
<Route  exact path="/" element={<Home/>}></Route> 
 <Route  exact path="/home" element={<Home/>}></Route> 
 <Route  exact path="/search" element={<Search/>}></Route> 
 <Route  exact path="/explore" element={<Explore/>}></Route> 
 <Route  exact path="/post" element={<Post imgsrc={Data.postImage} timeline={Data.Timestamp} user={Data.user}likes={Data.Likes}/>}></Route> 
 <Route  exact path="/profile" element={<Profile/>}></Route> 

</Routes>

</Router>
 {/* <Search />  */}
</>
  );
}

export default App;