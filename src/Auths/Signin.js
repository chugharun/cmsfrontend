import React from "react";
import Base from "../Base";
import "./Sign.css"
import Footer from "../Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
const Signin = () => {

  const signInForm = () => {

    return (
      <React.Fragment>
        <header>
          <Base />
        </header>
        <main>
          <div className="testimonial">


            <div className="container" style={{ marginTop: "20px", paddingTop: "20px", paddingBottom: "20px", paddingLeft: "5px", paddingRight: "5px" }}>
              <div className="row justify-content-md-center"
              >
                <div className="col-lg-auto col-md-auto col-sm-auto">
                  <div className="card" style={{ width: "auto", paddingLeft: "30px", paddingRight: "30px" }}>
                    <div className="card-body text-center">


                      <div>
                        <h2>Login</h2>
                        <br />
                        <label>
                          <span>Email Address</span>
                          <input id="auth-input" type="email" />
                        </label>
                        <br />
                        {/*<label for="sel1">Gender</label>
<select class="form-control"  id="sel1" >
<option>Male</option>
<option>Female</option>
<option>Other</option>
</select>*/}
                        <br />
                        <label>
                          <span>Password</span>
                          <input id="auth-input" type="password" />
                        </label>
                        <button className="submit sbtn" type="button" style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}  >Login</button>

                        <p className="forgot-pass">Forgot Password ?</p>

                        <div className="social-media">
                          <ul>
                            <li><img src="/assests/facebook.png" alt={""} /></li>
                            <li><img src="/assests/twitter.png" alt={""} /></li>
                            <li><img src="/assests/linkedin.png" alt={""} /></li>
                            <li><img src="/assests/instagram.png" alt={""} /></li>
                          </ul>
                        </div>
                      </div>










                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer style={{
          marginTop: "50px",
          padding: "20px"
        }}>
          <Footer />
        </footer>
      </React.Fragment>
    );




  }
  return (

    <div>


      {signInForm()}



    </div>

  )
}

export default Signin;