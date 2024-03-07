import React from 'react';
import { Row, Col, Button, Tooltip, OverlayTrigger, Image, Carousel } from 'react-bootstrap';
import { RiShareBoxFill } from 'react-icons/ri';
import { FaArrowRight } from "react-icons/fa";
import { BsCheckCircle } from 'react-icons/bs';
import ListGroup from 'react-bootstrap/ListGroup';
import { RiNumber1, RiNumber2, RiNumber3 } from 'react-icons/ri';
import ReactPlayer from 'react-player';
import img1 from '../assets/cnbc-logo.png'
import img2 from '../assets/axios-logo.png'
import video from '../assets/herovideo3.mp4'
import step1 from '../assets/step1.jpg'
import step2 from '../assets/step2.jpg'
import step3 from '../assets/step3.jpg'
import insure3 from '../assets/insure3.jpg'
import insure2 from '../assets/insure2.jpg'
import dashboardhome from '../assets/dashboardhome.png'
import startupOwner from '../assets/startup-owner.jpg'
import dashboardcert from '../assets/dashboardcert.jpg'


export const Home = () => {
  const lists = [
    ['Item 1', 'Item 2', 'Item 3'],
    ['Item 4', 'Item 5', 'Item 6'],
    ['Item 7', 'Item 8', 'Item 9'],
  ];
  return (
    <div className="container-fluid">
      <Row className="align-items-center">
        {/* Tooltip side */}
        <Col xs={12} md={6}>
          <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3">
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="phone-tooltip">1(888) 880-DASH</Tooltip>}
            >
              <span className="d-flex align-items-center bgTool rounded-pill p-1">
                <span className="p-1 fs-8">Read About our Series A funding announcement</span>
                <span className="pe-2">
                  <RiShareBoxFill />
                </span>
              </span>
            </OverlayTrigger>
          </div>
          <div className="text-center text-md-start mb-3">
            <h3 className="mb-2" style={{ fontSize: '40px', fontWeight: 'bolder' }}>Business Insurance in a Dash for<br /> <span style={{ fontSize: '50px', color: '#0ed087' }}>Small Business</span></h3>
            <p className="mb-0">Tailored risk management for your growing business. From quote to coverage in clicks, not weeks.</p>
          </div>
          <div className="text-center text-md-center">
            <Button variant="success" className="d-flex align-items-center" style={{ backgroundColor: '#0ed087', border: 0, }}>
              Get a quote <span className='ms-3 align-middle'> <FaArrowRight /></span>
            </Button>
          </div>
        </Col>

        {/* Video side */}
        <Col xs={12} md={6}>
          <div className="video-container d-flex justify-content-center justify-content-md-end">
            <ReactPlayer
              url={video}

              width="100%"
              height="auto"
              muted={true}

              playing={true}
              controls={false}
            />
          </div>
        </Col>
      </Row>
      {/* next row side */}
      <Row className="align-items-center">
        <div className='text-center text-md-center mt-5 mt-md-5' style={{ fontWeight: 'bolder', fontSize: '20px', color: 'black' }}>In the Press</div>
        <Row className="justify-content-center">
          <Col xs={2} className="text-center">
            <Image src={img1} fluid />
          </Col>
          <Col xs={2} className="text-center">
            <Image src={img2} fluid />
          </Col>
          <Col xs={2} className="text-center">
            <Image src={img1} fluid />
          </Col>
          <Col xs={2} className="text-center">
            <Image src={img2} fluid />
          </Col>
          <Col xs={2} className="text-center">
            <Image src={img1} fluid />
          </Col>
        </Row>
      </Row>

      <Row className="align-items-center">
        <div className='text-center text-md-center mt-5 mt-md-5' style={{ fontWeight: 'bolder', fontSize: '30px', color: 'black' }}>3 Simple steps to<span style={{ color: '#0ed087' }}> instant </span>coverage</div>
        <div className='text-center text-md-center' style={{ fontWeight: 'lighter', fontSize: '20px', color: 'black' }}>Fast, easy, and reliable coverage that reaches businesses where they are, when they need it</div>
        <Row className="justify-content-center mt-4 mt-md-5">
          <Col xs={12} sm={6} md={4} className="text-center mb-4">
            <Image src={step1} fluid />
            <div>
              <RiNumber1 size={20} />
              <span style={{ fontSize: '16px', fontWeight: 'bolder', marginTop: '10px' }}>Tell us what you do</span>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} className="text-center mb-4">
            <Image src={step2} fluid />
            <div>
              <RiNumber2 size={20} />
              <span style={{ fontSize: '16px', fontWeight: 'bolder', marginTop: '10px' }}>Select your policy</span>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} className="text-center mb-4">
            <Image src={step3} fluid />
            <div>
              <RiNumber3 size={20} />
              <span style={{ fontSize: '16px', fontWeight: 'bolder', marginTop: '10px' }}>Get instant coverage</span>
            </div>
          </Col>
        </Row>
      </Row>

      <Row className="justify-content-center mt-4 mt-md-5">
        <Col xs={12} className="text-center ">

          <div style={{ fontSize: '40px', fontWeight: 'bolder' }}>
            Who we <span style={{ color: '#0ed087' }}> insure</span>
          </div>
          <p className='mt-2 justify-content-center text-center'>
            At Coverdash, we understand how to protect your business and can<br /> provide – tailored, low-cost and hassle-free insurance coverage
          </p>
        </Col>

      </Row>


      <Row className="justify-content-center mt-4 mt-md-5">
        <Col xs={12} sm={6} md={4} className="text-center mb-4">
          <Image src={insure3} fluid />

        </Col>
        <Col xs={12} sm={6} md={7} className=" mb-4">
          <p style={{ color: '#0ed087', fontSize: '35px', fontWeight: 'bold' }}>Small business owner</p>
          <p className='fs-5'>Managing your own business means you have enough on your plate.</p>
          <div>
            <Button variant="success" size="lg">
              Get Started
            </Button>{' '}
            <Button variant="light" size="lg">
              Learn more
            </Button>{' '}
          </div>

          <div className="mt-4" style={{ marginTop: '150px' }}>
            <Carousel indicators={false} prevIcon={null} nextIcon={null} className="carousel-container">
              {lists.map((list, index) => (
                <Carousel.Item key={index}>
                  <Row>
                    {list.map((item, itemIndex) => (
                      <Col xs={4} key={itemIndex} className="text-center">
                        <BsCheckCircle className="check-icon me-2" style={{ color: '#0ed087' }} />
                        {item}
                        <br />
                        <BsCheckCircle className="check-icon me-2" style={{ color: '#0ed087' }} />
                        {item}
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>


        </Col>

      </Row>


      <Row className="justify-content-center mt-4 mt-md-5">

        <Col xs={12} sm={6} md={6} className=" mb-4">
          <p style={{ color: '#0ed087', fontSize: '35px', fontWeight: 'bold' }}>Startup</p>
          <p className='fs-5'>Don't let unnecessary business risks make your founder journey bumpier than it needs to be.</p>
          <div>
            <Button variant="success" size="lg">
              Get Started
            </Button>{' '}
            <Button variant="light" size="lg">
              Learn more
            </Button>{' '}
          </div>

          <div className="mt-4" style={{ marginTop: '150px' }}>
            <Carousel indicators={false} prevIcon={null} nextIcon={null} className="carousel-container">
              {lists.map((list, index) => (
                <Carousel.Item key={index}>
                  <Row>
                    {list.map((item, itemIndex) => (
                      <Col xs={4} key={itemIndex} className="text-center">
                        <BsCheckCircle className="check-icon me-2" style={{ color: '#0ed087' }} />
                        {item}
                        <br />
                        <BsCheckCircle className="check-icon me-2" style={{ color: '#0ed087' }} />
                        {item}
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>


        </Col>


        <Col xs={12} sm={6} md={4} className="text-center mb-4">
          <Image src={startupOwner} fluid />

        </Col>
      </Row>

      <Row className="justify-content-center mt-4 mt-md-5">




        <Col xs={12} sm={6} md={7} className="text-center mb-4">
          <Image src={insure2} fluid />

        </Col>


        <Col xs={12} sm={6} md={4} className=" mb-4">
          <p style={{ color: '#0ed087', fontSize: '35px', fontWeight: 'bold' }}>E-Commerce merchant</p>
          <p className='fs-5'>Selling online is hard enough without having to think about what else can go wrong.</p>
          <div>
            <Button variant="success" size="lg">
              Get Started
            </Button>{' '}
            <Button variant="light" size="lg">
              Learn more
            </Button>{' '}
          </div>




        </Col>
      </Row>


      <Row className="justify-content-center mt-4 mt-md-5">




        <Col xs={12} sm={6} md={8} className="mb-4 text-center">
          <div className='fs-5' style={{ fontSize: '20px', fontWeight: 'bolder' }}><span style={{ color: '#0ed087' }}>Simplified</span> insurance experience</div>
          <p className='mt-2 fs-5'>Instant access to your own personalized customer dashboard to manage, monitor and control your insurance coverages</p>
          <Image src={dashboardhome} fluid />
        </Col>



      </Row>


      <Row className="justify-content-center mt-4 mt-md-5">

        <Col xs={12} sm={6} md={7} className=" mb-4">
          <div style={{ fontSize: '35px', fontWeight: 'bold' }}>Create a certificate of insurance<br/> (“COI”) in seconds</div>
          <p className='fs-5'>Certificates of insurance protect small business owners and their partners before they begin working together. Has a client or business partner requested proof of business insurance coverage? You can instantaneously generate certificates of insurance for your business on your own or with the assistance of a Coverdash agent.</p>
          <div>
            <Button variant="success" size="lg">
              Get Started
            </Button>{' '}
                     </div>

          

        </Col>


        <Col xs={12} sm={6} md={4} className="text-center mb-4">
          <Image src={dashboardcert} fluid />

        </Col>
      </Row>



    </div>
  );
};
