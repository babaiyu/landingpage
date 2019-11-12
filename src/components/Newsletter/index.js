import React from 'react';
import { Animated } from 'react-animated-css';
import 'font-awesome/css/font-awesome.min.css';
import './style.css';

const iconStyle = {
  float: 'right'
};

const Newsletter = () => {
  const [value, onClose] = React.useState(true);
  const handleSubmit = () => {
    localStorage.setItem('news', false);
    onClose(false)
  }
  return (
    <Animated isVisible={value} animationIn="fadeInUp" animationOut="fadeOutDown" className="newsletter">
      <i className="fa fa-close" style={iconStyle} onClick={handleSubmit}></i>
      <h2>Get latest updates in web technologies</h2>
      <p>I write articles related to web technologies, such as design trends, development
tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get
them all.</p>
      <div className="formNews">
        <input type='text' placeholder='Email Address' className="inputNews" />
        <button className="btnNews" onClick={() => alert('Count me in!')}>Count me in!</button>
      </div>
    </Animated>
  );
};

export default Newsletter;
