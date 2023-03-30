import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './contactUs.scss';
import contactUsImg from '../../../assets/contact-us-img.png';

const ContactUs = () => {
  return (
    <div className='contact-us-wrapper' >
      <Container>
        <div className='contact-us-container' >
          <Row>
            <Col>
            <div className='contact-us-left-details' >
              <h2>We’re Help <br />
                To Build Your <br />
                Dream Project</h2>

              <p>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
              <Button>Contact Us</Button>
            </div>
            </Col>
            <Col>
               <div className='contact-us-right-images' >
                    <img src={contactUsImg} alt="img-contact-us" />
               </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default ContactUs;