import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/Logo.jpg'
import { FaArrowRight } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import './Navbar.css'
function NavScrollExample() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary " fixed="top">
      <Container fluid>
      <Navbar.Brand href="#" >
          <img
            src={Logo}
            alt="Your Logo"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='nav-link'>Home</Nav.Link>
            <NavDropdown title="Who We Insure" id="navbarScrollingDropdown" className="custom-dropdown">
              <NavDropdown.Item href="#action2">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action3">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Coverage" id="navbarScrollingDropdown" className="custom-dropdown">
              <NavDropdown.Item href="#action5">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action6">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action7">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" className='nav-link'>
              Partner
            </Nav.Link>
            <Nav.Link href="#" className='nav-link'>
              Blog
            </Nav.Link>
            <NavDropdown title="About Us" id="navbarScrollingDropdown" className="custom-dropdown">
              <NavDropdown.Item href="#action5">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action6">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action7">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>


          <Form className="d-flex">
          <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="phone-tooltip">1(888) 880-DASH</Tooltip>}
    >
      <span className="d-flex align-items-center bgTool rounded-pill p-1">
        <span className='p-1 fs-8 '>
          <IoIosCall />
        </span>
        <span className='pe-2'>
        1(888) 880-DASH
        </span>
      </span>
    </OverlayTrigger>
          <Button variant="light">Login</Button>{' '}
           <Button variant="success" className=" d-flex align-items-center jus" style={{ backgroundColor: '#0ed087',border:0 }}>
              Get a quote <span className='ms-3' align-items-center> <FaArrowRight /></span>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    
     </>
  );
}

export default NavScrollExample;