/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  Container, Navbar,
} from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import MenuDrawer from '../MenuDrawer/MenuDrawer';
import logo from '../../public/images/logo.png';

export default function NavBar() {
  return (
    <Navbar
      key={false}
      expand={false}
      style={{ backgroundColor: '#3E3E3C' }}
      sticky="top"
    >
      <Container fluid>
        <Navbar.Brand style={{ color: '#EEF0F2' }}>
          <Link passHref href="/">
            <div style={{ cursor: 'pointer', display: 'flex', alignContent: 'center' }}>
              <Image src={logo} height={60} width={60} />
              <span style={{ display: 'flex', alignItems: 'flex-end', marginLeft: '1rem' }}>HireFrame</span>
            </div>
          </Link>
        </Navbar.Brand>
        <MenuDrawer />
      </Container>
    </Navbar>
  );
}
