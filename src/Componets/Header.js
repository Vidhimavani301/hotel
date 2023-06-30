import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
        <div className='d-flex justify-content-around mt-2'>
            <div>
                <Link to="#" className="btn  py-2 px-3 btn1 rounded-0">BOOK NOW</Link>
            </div>
            <div className='py-2 d-none d-sm-block'>
                <img src="assets/img-7/logo.png" alt=""/>
            </div>
            <div>
            <nav className="navbar "> 
        <div className="container-fluid ms-5">
            <Link className="" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <span className="material-symbols-outlined text-dark"  style={{fontSize:"40px"}}>menu</span>
            </Link>
            
          <div className="offcanvas offcanvas-start "  id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" >
            <div className="offcanvas-header">
              <button type="button" className="btn-close bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav  flex-grow-1 text-center ">
                <li className="nav-item"><Link className="nav-link  text-dark h3   fw-normal" aria-current="page" to="/">HOME</Link></li>
                <li className="nav-item"><Link className="nav-link text-dark h3  fw-normal" to="/About">ABOUT</Link></li>
                <li className="nav-item"><Link className="nav-link text-dark h3  fw-normal" to="/Rooms" >ROOMS</Link></li>
                <li className="nav-item"><Link className="nav-link text-dark h3  fw-normal" to="/Menu">MENU</Link></li>
                <li className="nav-item"><Link className="nav-link text-dark h3  fw-normal" to="/Booknow" aria-expanded="false">BOOK NOW</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
            </div>
        </div>    
    </div>
  )
}
