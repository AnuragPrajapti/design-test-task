import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './topSection.scss';
import starImg from '../../../assets/Star.png';
import Bitmap from '../../../assets/Bitmap.png';
import topSectionImg from '../../../assets/top-section-img.png'

const TopSection = () => {
  return (
    <div className='top-section-wrapper' >
      <Container>
        <div className='top-section-container' >
          <Row>
            <Col className='top-left'  >
              <b>Modern Studio</b>
              <div>
                <img src={starImg} alt="star-img" />
                <h1>We’re Help  <br /> To  Build Your<br /> Dream Project</h1>
                <p>Agency provides a full service range including technical<br /> skills, design, business understanding.</p>
              </div>
              <div className='button-contact' >
                <Button variant='primary' >HOW WE WORK</Button>
                <Link>Contact Us</Link>
              </div>

              <div className='marchant-shoes'>
                <img src={Bitmap} alt="bit-map" />
                <p>
                  "Put themselves in the merchant's shoes"<br />
                  <span>Meta Inc.</span>
                </p>

              </div>

            </Col>
            <Col className='top-right' >
              <div className='top-section-img' >
                <img src={topSectionImg} alt="top-section-img" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default TopSection;