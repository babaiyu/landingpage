import React from 'react';
import { color } from '../../utils/constant';
import './style.css';

const vert_align = {
  display: 'flex',
  backgroundColor: color.smokeGrey,
};

const text = `By accessing and using this website, you acknowledge that you have read and
understand our Cookie Policy, Privacy Policy, and our Terms of Service.`;

const NotifPanel = () => {
  const [value, onGotIt] = React.useState(true);
  return (
    value === true ?
      <div>
        <div className='contentNotif container' style={vert_align} fixed='top'>
          <div className='textNotif'>
            <p onClick={() => alert('Hello World')}>{text}</p>
          </div>
          <button type="button" className="btnNotif" onClick={onGotIt}>Got It</button>
        </div>
        <div className="height" />
      </div>
      : null
  );
};

export default NotifPanel;
