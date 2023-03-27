import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import './aboutUs.scss';
import { BitmapData } from './jsonData';
import Slider from 'react-slick';
import groupPicture from '../../../assets/about/images-pictures/group-picture.png';

import { Link } from 'react-router-dom';
import { BsFillBarChartFill } from 'react-icons/bs'

const AboutUs = () => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  };
  return (
    <div className='about-us-wrapper' >
      <Container>
        <div className='about-us-container' >
          <Row>
            <Col className='img-logo' >
              <Slider {...settings}>
                {
                  BitmapData?.map((item, index) => {
                    return (
                      <div key={index}>
                        <img src={item?.logoImg} alt="img" />
                      </div>
                    )
                  })
                }
              </Slider>
            </Col>
          </Row>

          <Row>
            <Col className='left-col-img' >
              <div className='group-picture' >
                <img src={groupPicture} alt="group-picture" />
              </div>
            </Col>

            <Col>
              <div className='right-col-details' >
                <p>ABOUT</p>
                <h1>An Experience Design Agency</h1>
                <h5>Provides a full service range</h5>
                <span>Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.</span>
                <Button>ABOUT US</Button>
              </div>
            </Col>
          </Row>

          <div className='percentage-experience' >
            <Row>
              <Col className='percentage'>
                <h1>42%</h1>
                <p>Years of experience</p>
              </Col>

              <Col className='percentage'>
                <h1>73+</h1>
                <p>Agency members</p>
              </Col>

              <Col className='percentage'>
                <h1>5.000</h1>
                <p>Projects complete</p>
              </Col>
            </Row>
          </div>

          <div className='feature-section' >
            <Row>
              <Col lg={5} md={5} >
                <div className='feature-left' >
                  <h5>Features</h5>
                  <p>
                    Long run, and work as an extension of the merchant's team.
                  </p>
                  <Link to="/">Read More</Link>
                </div>
              </Col>
              <Col lg={7} md={5} >
                <div className='feature-right' >
                  <Row>
                    <Col>
                      <div className='professional' >
                        <b>
                          <BsFillBarChartFill />
                        </b>
                        <h4>Professional</h4>
                        <p>Full service range including technical skills, design.</p>
                      </div>
                    </Col>
                    <Col>
                      <div className='accessibility'>
                        <h4>Accessibility</h4>
                        <p>Business understanding,<br /> ability to put themselves.</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default AboutUs;