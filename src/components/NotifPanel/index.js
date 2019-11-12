import React from 'react';
import { Animated } from 'react-animated-css';
import { color } from '../../utils/constant';
import './style.css';

const vert_align = {
  display: 'flex',
  backgroundColor: color.smokeGrey,
};

const NotifPanel = () => {
  const [value, onGotIt] = React.useState(true);
  return (
      <Animated isVisible={value} animationIn="fadeInDown" animationOut="fadeOutUp" className="contentNotif" >
        <div className='contentNotif container' style={vert_align} fixed='top'>
          <div className='textNotif'>
            <small onClick={() => alert('Hello World')}>
              By accessing and using this website, you acknowledge that you have read and
  understand our <b className="textBlue">Cookie Policy, Privacy Policy,</b> and our <b className="textBlue">Terms of Service</b>.
            </small>
          </div>
          <button type="button" className="btnNotif" onClick={() => onGotIt(false)}>Got It</button>
        </div>
        <Animated isVisible={value} animationIn="fadeInDown" animationOut="fadeOutUp">
          <div className="height" />
        </Animated>
      </Animated>
  );
};

export default NotifPanel;
