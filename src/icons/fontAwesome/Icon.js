import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const iconStyle = {
  fontSize: 35,
  color: 'rgba(0, 0, 0, 0.25)'
};

const Icon = (props) => {
  return (
    <i className={props.name} style={iconStyle}></i>
  );
};

export default Icon;
