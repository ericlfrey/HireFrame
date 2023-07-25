import React from 'react';
import {
  Button, Container, Form, Image, Nav, NavDropdown, Navbar, Offcanvas,
} from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';

export default function NavbarOffCanvas() {
  const { user } = useAuth();
  return (
    <Navbar key={false} expand={false} style={{ backgroundColor: '#6765bb' }}>
      <Container fluid>
        <Navbar.Brand href="#">HireFrame</Navbar.Brand>
        <Navbar.Toggle style={{ all: 'unset', cursor: 'pointer' }}>
          <Image
            src={user.photoURL}
            alt="Picture of the user"
            width="60"
            height="60"
            // onClick={handleShow}
            roundedCircle
          />
        </Navbar.Toggle>
        <Navbar.Offcanvas
          // id={`offcanvasNavbar-expand-${expand}`}
          // aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton style={{ backgroundColor: '#f5f5f5' }}>
            <Offcanvas.Title>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body style={{ backgroundColor: '#f5f5f5' }}>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown
                title="Dropdown"
              // id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
