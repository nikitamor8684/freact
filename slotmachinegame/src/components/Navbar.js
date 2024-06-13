import React from 'react';
import {Link} from 'react-router-dom';
const Navbar=()=>{
    return(
        <>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to="#">Navbar</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/slotm">slotmachine</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/time">Time</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/grettings">Grettings</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/form">Form</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/todo">Todo</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/todo1">Todo1</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/search">Search image</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/weather">Search Weather</Link>
      </li>
    </ul>
   
  </div>
</nav>

        </>
    )
}
export default Navbar;