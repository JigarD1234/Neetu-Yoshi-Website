import React, { useEffect } from 'react'
import { useState } from 'react'
import './Navbar.css'
import { NavLink, useLocation } from 'react-router-dom'
import Hamburger from './Hamburger'



const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();


  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  useEffect(() => {
    setShowNavbar(false);
  }, [location.pathname]);

   
  return (
    <>
      <nav style={{ position: "fixed",zIndex:'20',marginBottom:'5%' }} className='navbar'>
        <div className="container-fluid navbar-wrapper">
          <div className="logo">
            <img src='/images/neetuyoshilogo.png'/> 
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul id='main-links'>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/fund-details">About Us</NavLink>
              </li>
              <li>
              <NavLink to="/how-we-do-it">Manufacturing</NavLink>
              </li>
              {/* <li>
                <a style={{color:"rgb(188,188,188"}}>About</a> <IoIosArrowDown style={{ color: "grey", cursor: "pointer" }} />
                <ul className='dropdown-menu'>
                  <NavLink to="/about">About Us</NavLink>
                  <NavLink to="/about/management">KMP Team</NavLink>
                  <NavLink to="/about/milestones">Milestones</NavLink>
                  <NavLink to="/about/gallery">Gallery</NavLink>
                </ul>
              </li> */}
              
              <li><NavLink to="/sme">Certification</NavLink></li>
 
              <li>
              <NavLink to="/case-studies">Global Customer</NavLink>
              </li>
              <li>
              <NavLink to="/blog">Sustainability</NavLink>
              </li>
              <li>
              <NavLink to="/blog">Investor</NavLink>
              </li>
              <li>
              <NavLink to="/blog">Contact Us</NavLink>
              </li>
              
              
              {/* <li className='nav-list-icons'>
                <FaLinkedin className='n-icons'/>
                <FaXTwitter className='n-icons'/>
                <FaFacebook className='n-icons'/>
              </li> */}
               

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar