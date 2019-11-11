import React from 'react';
import './style.css';
import Icon from '../../icons/fontAwesome/Icon';
import dataMenu from './dataMenu';

const Hightlight = () => {
  return (
    <div className="contentHighlight">
      <center className="titleHighlight">
        <h1>How Can I Help You?</h1>
        <p>Our work then targeted, best practices outcomes social innovation synergy. Venture philanthropy, revolutionary inclusive policymaker relief. User-centered program areas scale.</p>
      </center>
      {
        dataMenu.map((item, index) => (
          <div key={index} className="section">
            <div className="gridContainer">
              <p className='titleMenu'>{item.title}</p>
              <Icon name={item.icon} />
            </div>
            <p>{item.description}</p>
          </div>
        ))
      }
    </div>
  );
};

export default Hightlight;
