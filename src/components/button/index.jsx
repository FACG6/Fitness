import React from 'react';
import './index.css'
const Button = ({ buttonText, id, onClick, ...rest }) => (
  <button id={id} onClick={onClick} {...rest}>
    {buttonText}
  </button> 
);

export default Button ;