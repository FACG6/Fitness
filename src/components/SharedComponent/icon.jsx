import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Button from './button'

const handleclick = (e) => {
  sessionStorage.clear();
  window.location.href='/login';
  return true;
}

const Icons =()=> {
    return (
      <div className='icons'>
        <Link to='/'> <div className="icon"><i className="fas fa-home icon" /></div> </Link>
        <Button buttonText=''
          id='logoutbtn'
          onClick={handleclick}
          className='fas fa-sign-out-alt logoutbtn'
          type='submit' />
      </div>
    )
  
}
export default Icons;