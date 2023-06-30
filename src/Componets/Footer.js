import React from 'react'
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <div>
        <footer className="footer f-bg-color">
            <div className="footer-top mb-5">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-5 col-md-6 mt-5">
                            <div className="footer-info">
                                <img src="assets/img-7/logo.png" alt=""/>
                            <p className='mt-3 h5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                            <div className="social-links mt-3">
                                <Link to="#" className="twitter"><i className="bx bxl-twitter"></i></Link>
                                <Link to="#" className="facebook"><i className="bx bxl-facebook"></i></Link>
                                <Link to="#" className="instagram"><i className="bx bxl-instagram"></i></Link>
                                <Link to="#" className="google-plus"><i className="bx bxl-skype"></i></Link>
                                <Link to="#" className="linkedin"><i className="bx bxl-linkedin"></i></Link>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-newsletter mt-5">
                            <h4>NEWSLETTER</h4>
                            <form method="post">
                            <input type="email" name="email"/><br/>

                            <input type="submit" value="Subscribe" className='mt-2 btn1'/>
                            </form>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links mt-5">
                            <h4>CONTACT</h4>
                            <address>
                            Seestrasse 21,<br/> Zurich,<br/> Switzerland bridge@example.com
                            </address>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container d-flex justify-content-evenly mt-5">
                <div className="copyright col-lg-6 col-md-6">
                     All rights reserved © QodeInteractive 2020
                </div>

                <div className="credits col-lg-6 col-md-6">
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <Link className="nav-link active text-dark" aria-current="page" to="/">HOME</Link>
                                    <Link className="nav-link text-dark" to="/About">ABOUT</Link>
                                    <Link className="nav-link text-dark" to="/Rooms">ROOMS</Link>
                                    <Link className="nav-link  text-dark" to="/Menu" >MENU</Link>
                                    <Link className="nav-link  text-dark" to="/Book now" tabindex="-1" aria-disabled="true">BOOK NOW</Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                
            </div>
        </footer>
    </div>
  )
}
