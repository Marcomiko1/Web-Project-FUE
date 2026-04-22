import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar_Style.css';
import facebookIcon from '../assets/icons8-facebook-48.png';
import instagramIcon from '../assets/icons8-instagram-48.png';
import linkedinIcon from '../assets/icons8-linkedin-48.png';
import fueIcon from '../assets/fue.png';

function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "custom-navbar scrolled" : "custom-navbar"}>
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={fueIcon} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>
              Home
            </Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>
              Projects
            </Nav.Link>
          </Nav>

          <div className="nav-right">
            <div className="social-icons">
              <a href="#"><img className="icons" src={facebookIcon} alt="Facebook" /></a>
              <a href="#"><img className="icons" src={instagramIcon} alt="Instagram" /></a>
              <a href="#"><img className="icons" src={linkedinIcon} alt="LinkedIn" /></a>
            </div>

            <button className="connect-btn" onClick={() => console.log("clicked")}>
              <span>Let's Connect</span>
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;