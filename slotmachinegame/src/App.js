import './App.css';
import Grettings from './components/Grettings';
import Slotm from './components/Slotm.js';
import Time from './components/Time';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Todo from './components/Todo';
// import Todo1 from './components/Todo1'
import Search from './components/Search';
import Sresult from './components/Sresult';
import Weather from './components/Weather';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
function App() {
  return (

    <div className="App">
      <Router>
      <Navbar />
      <Routes>
      <Route  exact path="/grettings" element={<Grettings/>}></Route>
<Route  exact path="/time" element={<Time/>}></Route>
<Route  exact path="/form" element={<Form/>}></Route>
<Route  exact path="/todo" element={<Todo/>}></Route>
{/* <Route  exact path="/todo" element={<Todo1/>}></Route> */}

<Route exact path="/slotm" element={<Slotm  x='😃' y='😃' z='😃'/>}></Route>
<Route exact path="/slotm" element={<Slotm  x='😂' y='🤣' z='😆' />}></Route>
<Route exact path="/slotm" element={<Slotm  x='😆' y='😆' z='😆'/>}></Route>
<Route exact path="/search" element={<Search/>}></Route>
<Route exact path="/sresult" element={<Sresult/>}></Route>
<Route exact path="/weather" element={<Weather/>}></Route>
</Routes>
</Router>
    </div>
  );
}

export default App;
