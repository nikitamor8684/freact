import React, { Component } from 'react'
import shopping from '../Images/shopping.jpg'
import camera from '../Images/camera.jpg'
import microphone from '../Images/microphone.jpg'
import laptop from '../Images/laptop.jpg'
import watch from '../Images/watch.jpg'
import company1 from '../Images/company1.jpg'
import company2 from '../Images/company2.png'
import company3 from '../Images/company3.png'
import company4 from '../Images/company4.png'
import img1 from '../Images/img1.webp'
import img2 from '../Images/img2.webp'
import img3 from '../Images/img3.webp'
import img5 from '../Images/img5.webp'
import Record from '../Record.json'
import {Link } from 'react-router-dom'
import Item from './Item'
import Check from './Check'

export class Home extends Component {
    render() {
        return (
            <div>
                <div style={{float:'left',marginLeft:'200px',marginTop:'100px'}}>
          
                    <p>  
                    Welcome To<br />
                        <h1>Fashion Hub</h1>
                      Lorem ipisum dolor sit Lorem ipisum dolor sit <br/>Lorem ipisum dolor sit Lorem ipisum dolor sitLorem ipisum dolor sit  <br/>  Lorem ipisum dolor sit    
                    </p>
                    <button type="button" class="btn btn-success">Shop Now</button>
                    </div>

                <div style={{float:'right',margin:'100px 200px 200px 0px'}}>
                <img src={shopping}  alt="shopping" height="300px" width="300px" />
                </div>

                
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={img5} class="d-block w-100" alt="..." style={{height:"700px"}}/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={img1} class="d-block w-100" alt="..." style={{height:"700px"}}/>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..." style={{height:"700px"}}/>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="s..." style={{height:"700px"}}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

                
                <h1 style={{clear:'both',color:'red',marginLeft:'500px'}}>Check Now</h1>
                <div style={{backgroundColor:'whitesmoke',display:'flex',flexWrap:'wrap'}}>
 
   <Check  
   imgsrc={watch}
   text="Watch"
   text1="Get 10% discount on watch"
   />
   <Check 
   imgsrc={laptop}
   text="Laptop"
   text1="Get 20% discount on latest laptop"
   />
   <Check 
   imgsrc={microphone}
   text="Microphone"
   text1="Get 10% discount with best voice quality"
   />
   <Check 
   imgsrc={camera}
   text="Camera"
   text1="Best picture quality camera"
   />
      </div>
             
              


<div className="row">
<h2 style={{marginTop:'100px',color:'red',marginLeft:'400px'}}>Top Deals with exchange offers</h2>
{
            Record.map((record) => {

            return (
                <div className="col-md-3 ">
              <Link
                to="/product"
                state={{
  picture1:record.picture1,
  picture2:record.picture2,
  picture3:record.picture3,
  picture4:record.picture4,
  price:record.price,
                }}
              >
           <Item 
           imgsrc={record.picture1}
           imgsrc2={record.picture2}
           />
              </Link>
                </div>

            );
          })}
</div>
 

<div style={{backgroundColor:'whitesmoke',display:'flex',flexWrap:'wrap',marginTop:'50px'}}>
                <h5 style={{margin:'40px 300px 0px 500px'}}>Trusted By 1000+ Companies</h5>
                       <div  className="company"  style={{marginLeft:'300px'}}>  <img src={company1}  alt="company name" height="100px" width="100px" /></div>
                       <div  className="company">  <img src={company2}  alt="company name" height="100px" width="100px" /></div>
                        <div className="company">  <img src={company3}  alt="company name" height="100px" width="100px" /></div>
                       <div  className="company">  <img src={company4}  alt="company name" height="100px" width="100px" /></div>
                </div>


</div>

    )
  }
}


export default Home
