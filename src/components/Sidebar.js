import React from 'react';
import {Link} from 'react-router-dom'


function Sidebar(){
        return(
            <>
<span className="sidebar">
<h2 style={{ fontFamily: "Lobster, cursive", margin:"37px"}}>Instagram</h2>
<div>
    <span>
<ul style={{listStyle:"none",fontSize:"10px"}}>
<Link to='/home' style={{textDecoration:'none'}} active>
<button  className='sidenav__button'><i className="fas fa-home"> </i><span style={{fontSize:"14px"}}>Home</span></button>
</Link>
<Link to='/search' style={{textDecoration:'none'}}><button  className='sidenav__button'>
 <i className="fas fa-search"> </i>
    <span style={{fontSize:"14px"}}> Search</span>
</button>
</Link>
<Link to='/explore' style={{textDecoration:'none'}}>  <button  className='sidenav__button'>
    <i className="far fa-compass" >         </i>
    <span style={{fontSize:"14px"}}>Explore </span>
</button>
</Link>
<Link to='/reels' style={{textDecoration:'none'}}>   <button  className='sidenav__button'>
    <i className="fa fa-video" >      </i>
    <span style={{fontSize:"14px"}}> Reels</span>
</button>
</Link>
<Link to='/notifications' style={{textDecoration:'none'}}> <button  className='sidenav__button'>
<i className="fas fa-heart" ></i>
<span style={{fontSize:"14px"}}>Notifications</span>
</button>
</Link>
<Link to='/messages' style={{textDecoration:'none'}}> <button  className='sidenav__button'>
<i className="fa fa-envelope" > </i>
<span style={{fontSize:"14px"}}>Messages</span>
</button>
</Link>
<Link to='/create' style={{textDecoration:'none'}}> <button  className='sidenav__button'><i className="fas fa-plus" ></i>
    <span style={{fontSize:"14px"}}>Create</span>
 </button>
 </Link>
 <Link to='/profile' style={{textDecoration:'none'}}>    <button  className='sidenav__button'><i className="fas fa-user" >       </i>
    <span style={{fontSize:"14px"}}>Profile</span>
 </button>
 </Link>
<span className='sidenav__more'>
<Link to='/more' style={{textDecoration:'none'}}> <button  className='sidenav__button'><i className="fas fa-bars" ></i>
    <span style={{fontSize:"14px"}}>More</span>
 </button>
 </Link>
 </span>

</ul>
</span>
</div>

</span>
            </>
        )
    }

export default Sidebar;
 