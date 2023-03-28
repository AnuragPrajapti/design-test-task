import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './teamsDeveloper.scss';
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs'
import { teamsDeveloperData } from './jsonData';
import Slider from 'react-slick';

const TeamsDeveloper = () => {

  const [sliderRef, setSliderRef] = useState(null)

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    // speed: 5000,
    // autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  
  return (
    <div className='teams-developer-wrapper' >
      <Container>
        <Row>
          <Col>
            <div className='teams-developer-container' >
              <h5>Our Team</h5>
              <div className='left-right' >
                <Row>
                  <Col sx={12} sm={12} md={6} lg={6}>
                    <h2>Team of Designers<br /> and Developers</h2>
                  </Col>
                  <Col sx={12} sm={12} md={6} lg={6}>
                    <BsArrowRightCircle onClick={sliderRef?.slickNext} />
                    <BsArrowLeftCircle onClick={sliderRef?.slickPrev} />
                  </Col>
                </Row>
              </div>

              <div className='profile-images' >
                <Slider
                  {...settings}
                  ref={setSliderRef}
                >
                  {
                    teamsDeveloperData?.map((item, index) => {
                      return (
                        <div key={index}>
                          <div className="images" >
                            <img src={item?.profileImage} alt="img" />
                          </div>
                          <h4>{item?.name}</h4>
                          <p>{item.designation}</p>
                        </div>
                      )
                    })
                  }
                </Slider>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TeamsDeveloper;