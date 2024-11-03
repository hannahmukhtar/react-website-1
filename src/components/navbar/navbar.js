import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">My Website</Link>          
      <Link to="/home">Home</Link>
      <Link to="/nothome">Not Home</Link>
    </nav>
  );
};

export default Navbar;
