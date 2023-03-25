import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.scss'

function HeaderNavbar() {
  return (
    <div className='navbar-wrapper' >
      <Navbar expand="lg">
        <Container>
          <div className='navbar-container' >
            <Navbar.Brand href="#" className='brand-name' >Agency</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="nav-link"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Link to="/" >About</Link>
                <Link to="/" >Services</Link>
                <Link to="/" >Pricing</Link>
                <Link to="/" >Blog</Link>
              </Nav>
            </Navbar.Collapse>
               <Button  variant='link' >CONTACT</Button>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default HeaderNavbar;