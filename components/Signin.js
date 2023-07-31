import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';
import logo from '../public/images/logo.png';

function Signin() {
  return (
    <>
      <Head>
        <title>HireFrame</title>
      </Head>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '90vh',
          padding: '30px',
          maxWidth: '400px',
          margin: 'auto',
        }}
      >
        <button type="button" style={{ all: 'unset' }} onClick={signIn}>
          <h1 style={{ color: '#EEF0F2', fontSize: '3.5rem', cursor: 'pointer' }}>HireFrame</h1>
        </button>
        <button type="button" style={{ all: 'unset', cursor: 'pointer' }} onClick={signIn}>
          <Image
            onClick={signIn}
            src={logo}
            className="logo"
            priority
          />
        </button>
        <Button
          type="button"
          className="btn-style"
          onClick={signIn}
          style={{ border: 'solid 1px #EEF0F2' }}
        >
          Sign In With Google
        </Button>
      </div>
    </>
  );
}

export default Signin;
