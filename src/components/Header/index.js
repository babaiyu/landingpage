import React from 'react';
import logo from '../../assets/y-logo-white.png';
import './style.css';

const name = 'Bayu Permana';

const btn = `LET'S MAKE CONTACT`;

const Header = () => {
  return (
    <div className='contentHeader'>
      <img src={logo} className='imgLogo' alt="Logo" />
      <div className='bodyHeader'>
        <h1>Hello! I'm {name}</h1>
        <h2>Consult, Design, and Develop Websites</h2>
        <p>Have something great in mind? Feel free to contact me.</p>
        <p>I'll help you to make it happen.</p>
        <button className="btnHeader" onClick={() => alert(btn)}>{btn}</button>
      </div>
    </div>
  );
};

export default Header;
