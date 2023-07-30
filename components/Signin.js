import React from 'react';
import Image from 'next/image';
import { signIn } from '../utils/auth';
import logo from '../public/images/logo.png';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hi there!</h1>
      <p>Click the button below to login!</p>
      <button type="button" className="btn btn-primary btn-lg copy-btn" onClick={signIn}>
        Sign In
      </button>
      <Image src={logo} />
    </div>
  );
}

export default Signin;
