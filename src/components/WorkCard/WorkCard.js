import React,  { Component } from 'react';
import "./WorkCard.css";

class WorkCard extends Component{
    render() {
        return(
            <div className="Card">
                <img src="https://www.w3schools.com/w3css/img_avatar3.png"/>
                <div className="Container">
                    <h5>Training Name</h5>
                </div>
            </div>
        );
    }
}

export default WorkCard;
