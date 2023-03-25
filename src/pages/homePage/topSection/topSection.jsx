import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './topSection.scss';
import starImg from '../../../assets/Star.png';
import Bitmap from '../../../assets/Bitmap.png';
import girlImg from '../../../assets/girlImg.png';
import lapTopImg from '../../../assets/laptop.png'
import ovel from '../../../assets/Oval.png';
import stars from '../../../assets/Shape.png';
import path from '../../../assets/Path.png';
import border from '../../../assets/border.png';
import ractangle from '../../../assets/Rectangle.png';
import ractangle1 from '../../../assets/Rectangle1.png';
import ractangle2 from '../../../assets/Rectangle2.png';
import ractangle3 from '../../../assets/Rectangle3.png';
import ractangle4 from '../../../assets/Rectangle4.png';

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
              <div className='d-flex' >
                <div className='laptop-img' >
                  <img src={lapTopImg} alt="laptop-img" />
                </div>
                <div className='over-star' >
                  <img src={ovel} alt="ovel" className='ovel' />
                  <img src={stars} alt="stars" className='stars' />
                </div>
                <div className='path-img' >
                  <img src={path} alt="path" />
                </div>
              </div>
              <div  className='d-flex' >
                <div className='letter-line' >
                  <img src={ractangle} alt="ractangle" />
                  <div className='border-lines' >
                  <img src={ovel} alt="ovel" className='ovel-circle' />
                    <ul>
                      <li>
                        <img src={ractangle1} alt="ractangle" style={{marginBottom : '8px'}} />
                      </li>
                      <li>
                        <img src={ractangle2} alt="ractangle" />
                      </li>
                      <li>
                        <img src={ractangle3} alt="ractangle" />
                      </li>
                      <li>
                        <img src={ractangle4} alt="ractangle" />
                      </li>
                    </ul>

                  </div>
                </div>
                <div className='girl-image' >
                  <img src={girlImg} alt="girl-img" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default TopSection;