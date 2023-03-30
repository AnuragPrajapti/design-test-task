import { useEffect, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.scss'
import componyLogo from '../../assets/logo.png';

function HeaderNavbar() {

  const [active, setActive] = useState('top-section')


  useEffect(() => {
    handleNavigate('top-section')
  }, [])

  const handleNavigate = (id) => {
    setActive(id);
    const getId = document.getElementById(id);

    getId && getId.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start'
    });

  }

  return (
    <div className='navbar-wrapper' >
      <Navbar expand="lg" fixed='top' style={{background : '#28293E'}} >
        <Container>
          <div className='navbar-container' >
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Navbar.Brand href="#" className='brand-name' ><img src={componyLogo} alt="logo" /></Navbar.Brand>
              <Nav
                className="nav-link"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Link
                  to="/"
                  onClick={() => handleNavigate('top-section')}
                  className={`${active ? 'top-section' : 'active'}`}
                >top-section</Link>
                <Link
                  to="/"
                  onClick={() => handleNavigate('about')}
                  className={`${active ? 'about' : 'active'}`}
                >About</Link>
                <Link
                  to="/"
                  onClick={() => handleNavigate('services')}
                  className={`${active ? 'services' : 'active'}`}
                >Services</Link>
                <Link
                  to="/"
                  onClick={() => handleNavigate('pricing')}
                  className={`${active ? 'pricing' : 'active'}`}
                >Pricing</Link>
                <Link to="/" >Blog</Link>
              </Nav>
              <Button variant='link' className='contact-link' >CONTACT</Button>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default HeaderNavbar;