/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Container, Image, Nav, Navbar, Offcanvas,
} from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../../utils/context/authContext';
import SearchBar from '../SearchBar/SearchBar';

export default function NavbarOffCanvas() {
  const { user } = useAuth();
  return (
    <Navbar key={false} expand={false} style={{ backgroundColor: '#6765bb' }}>
      <Container fluid>
        <Navbar.Brand>
          <Link passHref href="/">
            HireFrame
          </Link>
        </Navbar.Brand>
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
            <SearchBar />
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link href="/" passHref>Home</Link>
              <Link href="/contacts" passHref>Contacts</Link>
            </Nav>

          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
