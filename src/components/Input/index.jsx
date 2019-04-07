import React from 'react';
import './index.css'
const Input = ({ labelText, id, onChange, value,name, ...rest }) => (
  <label  htmlFor={id}  id={id}>
    {labelText}
    <input id={id} value={value} onChange={onChange} name={name} {...rest} />
  </label>
  
);

export default Input ;