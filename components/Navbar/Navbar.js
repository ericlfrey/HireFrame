/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  Container, Navbar,
} from 'react-bootstrap';
import Link from 'next/link';
import MenuDrawer from '../MenuDrawer/MenuDrawer';

export default function NavBar() {
  return (
    <Navbar key={false} expand={false} style={{ backgroundColor: '#3E3E3C' }}>
      <Container fluid>
        <Navbar.Brand style={{ color: '#E8E9C9' }}>
          <Link passHref href="/">
            HireFrame
          </Link>
        </Navbar.Brand>
        <MenuDrawer />
      </Container>
    </Navbar>
  );
}
