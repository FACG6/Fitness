import React, { Component } from 'react';
import Navbar from "./../Navbar/Navbar";
import WorkCard from "./../WorkCard/WorkCard";
import './TodayWorkout.css';

class TodayWorkout extends Component {
  // state()
  render() {
    return (
      <div className="Main">
        <Navbar className="Navbar_Main"/>
        <div className="icon"><i className="far fa-edit" /></div>
        <p className="Welcome">Welcome Mr. Khader</p>
        <div className="Card_list">
          <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCard />
        </div>
      </div>
    );
  }
}

// anti pattern ==> wrapper hell

export default TodayWorkout;
