import React from 'react-router-dom';
import {Link} from 'react-router-dom'
const Login=()=>{
    return(
      <>
      <div className='row col-md-12'>
<div className="row border col-md-12">
<div className='col md-6'>
<h3>Login</h3>
<p>If you have an account login here</p>
<div className="col-md-12">
<label htmlFor="inputEmail4" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-12">
                <label htmlFor="inputPassword4" className="form-label"> Password</label>
                <input   type="password" className="form-control" id="inputPassword4"/>
                </div>
                <div className="col-12">
                <button type="submit my-4" className="btn btn-primary">
                  Log in
                </button>
              </div>
              </div>


              <div className="col-md-12" style={{float:'right'}}>
            <div className="p-5">
            <h5>NEW CUSTOMER?</h5>
            <p>Registering for this site allows you to access your order status and history. We’ll get a new account set up for you in no time. For this will only ask you for information necessary to make the purchase process faster and easier</p>

            <div className="col-12">
            <Link to="/signup">

                <button type="submit" className="btn btn-primary">
                  CREATE AN ACCOUNT
                </button>
            </Link>
              </div>
            </div>
            </div>

            </div>

</div>

      </>  
    )
}
export default Login