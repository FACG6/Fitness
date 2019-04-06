import React, { Component } from 'react';
import "./Navbar.css";

class Navbar extends Component{
    render(){
        return(
            <div className="Navbar">
                <h3 className="left">Workout</h3>
                <h3 className="right">Wen.</h3>
            </div>
        );
    }
}

export default Navbar;
