import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

import { Nav } from './styled';

export default function Header() {
  return (
    <>
      <Nav>
        <a href="localhost:3000">
          <FaHome size={24} />
        </a>
        <a href="localhost:3000">
          <FaUserAlt size={24} />
        </a>
        <a href="localhost:3000">
          <FaSignInAlt size={24} />
        </a>
      </Nav>
      <h1>Oi</h1>
    </>
  );
}
