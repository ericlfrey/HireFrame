/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Container, Image, Nav, Navbar, Offcanvas,
} from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../../utils/context/authContext';
import SearchBar from '../SearchBar/SearchBar';
import { signOut } from '../../utils/auth';

export default function NavbarOffCanvas() {
  const { user } = useAuth();
  return (
    <Navbar key={false} expand={false} style={{ backgroundColor: '#3E3E3C' }}>
      <Container fluid>
        <Navbar.Brand style={{ color: '#E8E9C9' }}>
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
              <button type="button" onClick={signOut} style={{ all: 'unset' }}>
                <Link href="/">
                  Sign Out
                </Link>
              </button>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
