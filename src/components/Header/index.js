import React from 'react';
import logo from '../../assets/y-logo-white.png';
import './style.css';

const name = 'Bayu Permana';

const Header = () => {
  return (
    <div className='contentHeader'>
      <img src={logo} className='imgLogo' />
      <div className="bodyHeader">
        <p>Hello! I'm {name}</p>
      </div>
    </div>
  );
};

export default Header;
