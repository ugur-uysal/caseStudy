import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">Pixelplus Case Study</Link>
      </div>
    </header>
  );
}

export default Header;