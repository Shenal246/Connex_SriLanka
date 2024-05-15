import React, { useEffect } from 'react';
import './Navbar.css';
import Logo from '../../images/ConnexIT.png';
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import About from '../About/About';
import Home from '../Home/Home';
import Events from '../Events&News/Events';
import ContactUs from '../ContactUs/Contact';

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
                <NavLink to="/About" activeClassName='active-link' exact><li><a className="">Solutions</a></li></NavLink>
                <NavLink to="/Events&News" activeClassName='active-link' exact><li><a className="">Event & News</a></li></NavLink>
                <NavLink to="/About" activeClassName='active-link' exact><li><a className="">Portal</a></li></NavLink>
                <NavLink to="/About" activeClassName='active-link' exact><li><a className="">Countries</a></li></NavLink>

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
          
          

        </Routes>

      </Router>

    </>
  );
}

export default Navbar;
