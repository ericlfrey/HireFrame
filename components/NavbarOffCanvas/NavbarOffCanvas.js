/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  Button, Container, Form, Image, Nav, NavDropdown, Navbar, Offcanvas,
} from 'react-bootstrap';
import Link from 'next/link';
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
            roundedCircle
          />
        </Navbar.Toggle>
        <Navbar.Offcanvas
          placement="end"
        >
          <Offcanvas.Header closeButton style={{ backgroundColor: '#f5f5f5' }}>
            <Offcanvas.Title>
              {user.displayName}'s HireFrame
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body style={{ backgroundColor: '#f5f5f5' }}>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Filter"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Filter</Button>
            </Form>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link href="/" passHref>Home</Link>
              <Link href="/contacts" passHref>Contacts</Link>
              <NavDropdown
                title="Dropdown"
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

          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
