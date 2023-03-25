import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './teamsDeveloper.scss';
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs'
import { teamsDeveloperData } from './jsonData';
import Slider from 'react-slick';

const TeamsDeveloper = () => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
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
          slidesToScroll: 4,
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
                  <Col>
                    <h2>Team of Designers<br /> and Developers</h2>
                  </Col>
                  <Col>
                    <BsArrowRightCircle />
                    <BsArrowLeftCircle />
                  </Col>
                </Row>
              </div>

              <div className='profile-images' >
                <Slider {...settings}>
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