import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import './aboutUs.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BitmapData } from './jsonData';
import Slider from 'react-slick';
import ractangle from '../../../assets/about/images-pictures/Rectangle.png';
import ractangle1 from '../../../assets/about/images-pictures/Rectangle1.png';
import ractangle2 from '../../../assets/about/images-pictures/Rectangle2.png';
import ractangle3 from '../../../assets/about/images-pictures/Rectangle3.png';
import path from '../../../assets/about/images-pictures/Path.png';
import ovel from '../../../assets/about/images-pictures/Oval.png';
import ovel1 from '../../../assets/about/images-pictures/Oval1.png';
import ovel2 from '../../../assets/about/images-pictures/Oval2.png';
import chareTable from '../../../assets/about/images-pictures/chare-table.png';
import manImg from '../../../assets/about/images-pictures/man-img.png';

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
              <div style={{ backgroundImage: `url(${ractangle})` }} className="background-img" >
                <img src={path} alt="path" className='path' />
                <div className='squre-ovel' >
                  <div className='ovel' >
                    <img src={ovel2} alt="ovel" />
                    <img src={ovel} alt="ovel" />
                    <img src={ovel1} alt="ovel" />
                  </div>
                  <div className='border-line' >
                    <img src={ractangle2} alt="img" />
                    <img src={ractangle3} alt="img" style={{ marginTop: "5px" }} />
                  </div>
                  <img src={ractangle1} alt="squre" />
                </div>
                <img src={chareTable} alt="chare-table" className='chae-table' />
              </div>
              <img src={manImg} alt="man-img" className='man-img' />
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

        </div>
      </Container>
    </div>
  )
}

export default AboutUs;