
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './faqSection.scss';

const FAQSection = () => {
  return (
    <div className='faq-section-wrapper' >
       <Container>
         <Row>
           <Col>
               <center>FAQ Section</center>
            </Col>
         </Row>
        </Container>   
    </div>
  )
}

export default FAQSection;