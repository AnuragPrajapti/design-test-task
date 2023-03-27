import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import './pricingSection.scss';
import Slider from 'react-slick';
import { pricingSectionData } from './jsonData';

const PricingSection = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='pricing-section-wrapper'>
      <Container>
        <div className='pricing-section-container'>
          <Row>
            <Col>
              <div className='pricing-heading' >
                <h5>Pricing</h5>
                <h2>Check Our<br /> Pricing Plans</h2>
              </div>
            </Col>
          </Row>

          <Row>
            {
              pricingSectionData ? pricingSectionData.map((item, index) => {
                return (
                  <Col style={{ paddingRight : '0px' , paddingLeft : '0px' }}>
                    <div className={ item?.id === 1 ? "popular-pricing" :  "pricing-cards"} key={index} >
                      <p>{item?.popular}</p>
                      <h5>{item?.title}</h5>
                      <h3>{item?.plan}</h3>
                      <span>{item?.discriptions}</span>
                      <ul>
                        <li><span>{item?.plus}</span> {item?.brand}</li>
                        <li><span> {item.id === 0 ? item?.minus : item?.plus}</span> {item?.market}</li>
                        <li><span>{item.id === 0 || item.id === 1 ? item?.minus : item?.plus}</span> {item?.Production}</li>
                      </ul>
                      <Button>{item?.button}</Button>
                    </div>
                  </Col>
                )

              }) : null
            }
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default PricingSection;