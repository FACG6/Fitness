import React, { Component } from 'react';
import TodayWorkout from "./components/TodayWorkout/TodayWorkout";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodayWorkout />
      </div>
    );
  }
}

export default App;
