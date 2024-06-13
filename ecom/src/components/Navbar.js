import React  from 'react';
// import appleicon from '../images/appleicon.png'

export class Navbar {
    render(){
        return(
         <>
 <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" ><img src={appleicon} height="50px"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" >store</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" >Mac</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" >iPad</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" >iPhone</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" >Watch</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" >Airpods</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" >TV & Home </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" >Entertainment</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" >Accessiores</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" >Support</a>
        </li>
      </ul>
      </div>
      </div>
      <form class="d-flex" role="search">
     
     <button type="button" class="btn btn-primary mx-3">    <Link class="nav-link"
         to="/login">Login
         </Link></button>
         <Link to="/cart">
     <i class="bi bi-cart2"></i>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
 <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg>
</Link>
     </form>
      </nav>
         </>   
        )
    }
}
export default Navbar