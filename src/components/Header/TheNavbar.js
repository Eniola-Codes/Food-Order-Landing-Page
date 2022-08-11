import React from 'react';
import NavCartButton from './NavCartButton';
import {Navbar, Nav, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './TheNavbar.module.css'
import Logo from '../../assets/Logo/Logo.svg'

const TheNavbar = () => 
{

    return (
        <Navbar  expand="xl" className={`${classes.navbar}`}>
        
          <Navbar.Brand href="#home"><img src={Logo} alt='My logo'></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className={classes.toggle} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`${classes.nav__linkgroup} ms-auto`}>
              <Nav.Link href="#home" className={`${classes.nav__link} ${classes.firstnav__link} me-4`}>Home</Nav.Link>
              <Nav.Link href="#About us" className={`${classes.nav__link} me-4`}>About us</Nav.Link>
              <Nav.Link href="#Our products" className={`${classes.nav__link} me-4`}>Our products</Nav.Link>
              <Nav.Link href="#Testimonials" className={`${classes.nav__link} me-4`}>Testimonials</Nav.Link>
              <Nav.Link href="#Contact_us" className={`${classes.nav__link} me-4`}>Contact Us</Nav.Link>
              <Nav.Link href="#buttons" className={`${classes.nav__link}`}><NavCartButton/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    )
}

export default TheNavbar;