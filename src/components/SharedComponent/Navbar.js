import React, { Component } from 'react';
import "./index.css";

class Navbar extends Component{
  render(){
    const dateDay = new Date().toDateString().split(' ')[0] +' '+new Date().toDateString().split(' ')[1]+' ' + new Date().toDateString().split(' ')[2];
    return(
      <div className="Navbar">
        <h3 className="left"><span className='worknav'>Work</span>out</h3>
        <h3 className="right">{dateDay}</h3>
    </div>
  );
  }
}

export default Navbar;
