import './clientSide.scss'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';
import ovelImg from '../../../assets/client-side/Oval.png'
import ovelImg1 from '../../../assets/client-side/Oval1.png'
import ovelImg2 from '../../../assets/client-side/Oval2.png'
import ovelImg3 from '../../../assets/client-side/Oval3.png'

const ClientSide = () => {
  return (
    <div className='client-side-wrapper' >
      <Container>
        <div className='client-side-container'>
          <Row>
            <Col>
              <div className='container-heading' >
                <h5>Testimonials</h5>
                <h2>What Our <br /> Clients Saying</h2>
              </div>
            </Col>
          </Row>

          <Row>
            <Col style={{ paddingRight: '0px' }}>
              <div className='client-side-container-left' >
                <div className='meta-inc' >
                  <div className='svg-icons' >
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <p>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>
                  <div className='profile-img' >
                    <img src={ovelImg} alt="ovelImg" />
                    <h4>Graham Griffiths <br /><span>Meta Inc.</span></h4>
                  </div>
                </div>

                <div className='twitor' >
                  <div className='svg-icons' >
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <p>Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety.</p>
                  <div className='profile-img' >
                    <img src={ovelImg2} alt="ovelImg" />
                    <h4>Graham Griffiths <br /><span>Twitor</span></h4>
                  </div>
                </div>
              </div>
            </Col>
            <Col style={{ paddingLeft: '0px' }}>
              <div className='client-side-container-right'>
                <div className='photogram' >
                  <div className='svg-icons' >
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <p>Provide your business with a variety of digital solutions to promote your product or service online.</p>
                  <div className='profile-img' >
                    <img src={ovelImg1} alt="ovelImg" />
                    <h4>Richardo Kann <br /><span>Photogram</span></h4>
                  </div>
                </div>

                <div className='whochat' >
                  <div className='svg-icons' >
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <p>Promote your product or service online and help you hit your marketing goals and grow your business.</p>
                  <div className='profile-img' >
                    <img src={ovelImg3} alt="ovelImg1" />
                    <h4>Maria Trofimova <br /><span>Whochat</span></h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className='button-see-all' >
                <Button>See All</Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default ClientSide;