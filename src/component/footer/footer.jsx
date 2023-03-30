import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import './footer.scss';

const Footer = () => {
  return (
    <div className='footer-wrapper' >
      <Container>
        <div className='footer-container' >
          <Row>
            <Col xs={12} sm={12} md={3} lg={3}>
              <div className='agency' >
                <h4>Agency</h4>
              </div>
            </Col>
            <Col xs={6} sm={6} md={3} lg={3}>
              <div className='menu-service-tag' >
                <h5>Menu</h5>
                <ul>
                  <li><a href="/">About</a></li>
                  <li><a href="/">Services</a></li>
                  <li><a href="/">Blog</a></li>
                  <li><a href="/">Contact</a></li>
                </ul>
              </div>
            </Col>
            <Col xs={6} sm={6} md={3} lg={3}>
              <div className='menu-service-tag' >
                <h5>Service</h5>
                <ul>
                  <li> <a href="/">Design</a></li>
                  <li> <a href="/">Development</a></li>
                  <li> <a href="/">Marketing</a></li>
                  <li> <a href="/">See More</a></li>
                </ul>
              </div>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3}>
              <div className='icons' >
                <FaFacebookF />
                <AiOutlineTwitter />
                <AiOutlineInstagram />
              </div>
            </Col>
          </Row>
          <div className='footer-copy-rights' >
            <Row>
              <Col xs={12} sm={12} md={6} lg={6} >
                <p>Copyright © 2022 Laaqiq. All Rights Reserved.</p>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6}>
                <div className='terms-policy' >
                  <a href="">Terms of Use</a>
                  <a href="">Privacy Policy</a>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer