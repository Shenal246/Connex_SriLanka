import React, { useEffect } from 'react';
import './Navbar.css';
import Logo from '../../images/ConnexIT.png';
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import About from '../About/About';
import Home from '../Home/Home';
import Events from '../Events&News/Events';
import ContactUs from '../ContactUs/Contact';
import Solutions from '../Solutions/Solutions';
// import Portal from '../Solutions/solutionVendors/Perimia/Perimia';

import sin from '../../images/FlagIcon/singapore.png';
import aus from '../../images/FlagIcon/australia.png';
import ban from '../../images/FlagIcon/bangladesh.png';
import bru from '../../images/FlagIcon/brunei.png';
import cam from '../../images/FlagIcon/cambodia.png';
import wor from '../../images/FlagIcon/world.png';
import ind from '../../images/FlagIcon/india.png';
import laos from '../../images/FlagIcon/laos.png';
import mld from '../../images/FlagIcon/maldives.png';
import myn from '../../images/FlagIcon/myanmar.png';
import mrt from '../../images/FlagIcon/mauritius.png';
import sl from '../../images/FlagIcon/sri-lanka.png';
import tnz from '../../images/FlagIcon/tanzania.png';
import tld from '../../images/FlagIcon/thailand.png';
// import Perimia from '../Solutions/solutionVendors/Perimia/Perimia';
// import Authentication from '../Solutions/solutionVendors/Authentication/Authentication';
// import CyberSecurity from '../Solutions/solutionVendors/CyberSecurity/CyberSecurity';
// import Endpoint from '../Solutions/solutionVendors/Endpoint/Endpoin';
// import InfrastructureMonitoring from '../Solutions/solutionVendors/Infrastructure/InfrastructureMonitoring';
// import Networking from '../Solutions/solutionVendors/Networking/Networking';
// import Security from '../Solutions/solutionVendors/Security/Security';
// import Server from '../Solutions/solutionVendors/ServerBackup/Server';
import products from '../Products/products';


function Navbar() {

  useEffect(() => {
    // Apply .scrolled class to the body as the page is scrolled down
    function toggleScrolled() {
      const selectBody = document.querySelector('body');
      const selectHeader = document.querySelector('#header');
      if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
      window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    }

    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);

    // Mobile nav toggle
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

    function mobileNavToggle() {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    }

    mobileNavToggleBtn.addEventListener('click', mobileNavToggle);

    // Hide mobile nav on same-page/hash links
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToggle();
        }
      });
    });

    // Toggle mobile nav dropdowns
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
      navmenu.addEventListener('click', function (e) {
        if (document.querySelector('.mobile-nav-active')) {
          e.preventDefault();
          this.parentNode.classList.toggle('active');
          this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
          e.stopImmediatePropagation();
        }
      });
    });

    // Cleanup function
    return () => {
      document.removeEventListener('scroll', toggleScrolled);
      window.removeEventListener('load', toggleScrolled);
      mobileNavToggleBtn.removeEventListener('click', mobileNavToggle);
      document.querySelectorAll('#navmenu a').forEach(navmenu => {
        navmenu.removeEventListener('click', () => {
          if (document.querySelector('.mobile-nav-active')) {
            mobileNavToggle();
          }
        });
      });
      document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
        navmenu.removeEventListener('click', function (e) {
          if (document.querySelector('.mobile-nav-active')) {
            e.preventDefault();
            this.parentNode.classList.toggle('active');
            this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
            e.stopImmediatePropagation();
          }
        });
      });
    };
  }, []); // empty dependency array ensures that this effect runs only once on component mount

  return (
    <>
      <Router>
        <header id="header" className="header d-flex align-items-center sticky-top">
          <div className="container-fluid container-xl position-relative d-flex align-items-center">
            <a href="index.html" className="logo d-flex align-items-center me-auto">
              <NavLink to="" activeClassName='active-link' exact><img src={Logo} alt="Logo" /></NavLink>
            </a>
            <nav id="navmenu" className="navmenu">
              <ul class="no-bullets">
                <NavLink to="/About" activeClassName='active-link' exact><li><a className="">About Us</a></li></NavLink>
                <NavLink to="/About" activeClassName='active-link' exact><li><a className="">Products</a></li></NavLink>
                <NavLink to="/Solutions" activeClassName='active-link' exact><li><a className="">Solutions</a></li></NavLink>
                <NavLink to="/Events&News" activeClassName='active-link' exact><li><a className="">Event & News</a></li></NavLink>
                <NavLink to="/Products" activeClassName='active-link' exact><li><a className="">Portal</a></li></NavLink>
                
                <li className="dropdown countries"><a href="#" className='toggle-dropdown'>
                  <span className='toggle-dropdown'>Countries&nbsp;<i className="fa-solid fa-globe"></i> </span> <i className="bi bi-chevron-down toggle-dropdown arrow " style={{ fontSize: '1em'}}></i></a>
                  <ul className='container1'>
                    <div class="scrollable-menu flagName">
                      <li><a href="#"><img src={sin} alt=" Flag" className='flag'/> Singapore (HQ)</a></li>
                      <li><a href="#"><img src={aus} alt=" Flag" className='flag'/> Australia</a></li>
                      <li><a href="#"><img src={ban} alt=" Flag" className='flag'/> Bangladesh</a></li>
                      <li><a href="#"><img src={bru} alt=" Flag" className='flag'/>Brunei</a></li>
                      <li><a href="#"><img src={cam} alt=" Flag" className='flag'/>Cambodia</a></li>
                      <li><a href="#"><img src={wor} alt=" Flag" className='flag'/>UAE</a></li>
                      <li><a href="#"><img src={ind} alt=" Flag" className='flag'/>India</a></li>
                      <li><a href="#"><img src={laos} alt=" Flag" className='flag'/>Laos</a></li>
                      <li><a href="#"><img src={mld} alt=" Flag" className='flag'/>Maldives</a></li>
                      <li><a href="#"><img src={myn} alt=" Flag" className='flag'/>Myanmar</a></li>
                      <li><a href="#"><img src={mrt} alt=" Flag" className='flag'/>Mauritius</a></li>
                      <li><a href="#"><img src={sl} alt=" Flag" className='flag'/>Sri Lanka</a></li>
                      <li><a href="#"><img src={tnz} alt=" Flag" className='flag'/>Tanzania</a></li>
                      <li><a href="#"><img src={tld} alt=" Flag" className='flag'/>Thailand</a></li>
                    </div>
                  </ul>
                </li>
              </ul>
              <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>

            <NavLink to="/ContactUs" activeClassName='active-link' className="btn-getstarted" href="">Contact Us</NavLink>

          </div>
        </header>


        <Routes>

          <Route path="" exact Component={Home}></Route>
          <Route path="/About" exact Component={About}></Route>
          <Route path="/Events&News" exact Component={Events}></Route>
          <Route path="/ContactUs" exact Component={ContactUs}></Route>
          <Route path="/Solutions" exact Component={Solutions}></Route>
          {/* <Route path="/Perimia" exact Component={Perimia}></Route> */}
          {/* <Route path="/Authentication" exact Component={Authentication}></Route> */}
          {/* <Route path="/CyberSecurity" exact Component={CyberSecurity}></Route> */}
          {/* <Route path="/Endpoin" exact Component={Endpoint}></Route> */}
          {/* <Route path="/InfrastructureMonitoring" exact Component={InfrastructureMonitoring}></Route> */}
          {/* <Route path="/Networking" exact Component={Networking}></Route> */}
          {/* <Route path="/Security" exact Component={Security}></Route> */}
          {/* <Route path="/Server" exact Component={Server}></Route> */}
          <Route path="/Products" exact Component={products}></Route>
          
          



        </Routes>

      </Router>

    </>
  );
}

export default Navbar;
