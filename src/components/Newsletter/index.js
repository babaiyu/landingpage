import React from 'react';
import './style.css';
import 'font-awesome/css/font-awesome.min.css';

const iconStyle = {
  float: 'right'
};

const Newsletter = () => {
  const [value, onClose] = React.useState(true);
  return (
    value ?
      <div className="newsletter">
        <i className="fa fa-close" style={iconStyle} onClick={() => onClose(false)}></i>
        <h2>Get latest updates in web technologies</h2>
        <p>I write articles related to web technologies, such as design trends, development
tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get
them all.</p>
        <input type='text' placeholder='Email Address' className="inputNews" />
        <button className="btnNews" onClick={() => alert('Count me in!')}>Count me in!</button>
      </div>
      : null
  );
};

export default Newsletter;
