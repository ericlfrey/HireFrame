/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Image, Nav, Offcanvas } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../../utils/context/authContext';
import SearchBar from '../SearchBar/SearchBar';
import { signOut } from '../../utils/auth';

export default function MenuDrawer() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { user } = useAuth();
  return (
    <>
      <button type="button" style={{ all: 'unset', cursor: 'pointer', margin: '0 0 0 0' }} onClick={handleShow}>
        <Image
          src={user.photoURL}
          alt="Picture of the user"
          width="60"
          height="60"
          roundedCircle
        />
      </button>
      <Offcanvas
        placement="end"
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton style={{ backgroundColor: '#f5f5f5' }}>
          <Offcanvas.Title>
            {user.displayName}'s HireFrame
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ backgroundColor: '#f5f5f5' }}>
          <SearchBar />
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <button type="button" style={{ all: 'unset', marginTop: '1rem' }} onClick={handleClose}>
              <Link href="/" passHref>Home</Link>
            </button>
            {/* <button type="button" style={{ all: 'unset' }} onClick={handleClose}>
              <Link href="/contacts" passHref>Contacts</Link>
            </button> */}
            <button type="button" onClick={signOut} style={{ all: 'unset', marginTop: '1rem' }}>
              <Link href="/">
                Sign Out
              </Link>
            </button>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
