import './App.css';
import './bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from "./components/Footer";
import Item from './components/Item';
import Product from './components/Product';
import Login from './components/Login' ;
import Signup from './components/Signup';




import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Cart from './components/Cart.js';

function App() {
  return (
    <div className="App">

      <Router>
<Navbar />
<Routes>
<Route  exact path="/home" element={<Home/>}></Route>
<Route  exact path="/item" element={<Item/>}></Route>
<Route  exact path="/product" element={<Product/>}></Route>
<Route  exact path="/login" element={<Login/>}></Route>
<Route  exact path="/signup" element={<Signup/>}></Route>
<Route  exact path="/cart" element={<Cart/>}></Route>
</Routes>
<Footer />
</Router>

    </div>
  );
}

export default App;
