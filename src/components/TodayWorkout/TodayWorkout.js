import React, { Component } from 'react';
import './TodayWorkout.css';
import { Link } from "react-router-dom";
import {Redirect} from 'react-router-dom';
import Navbar from "../SharedComponent/Navbar";
import WorkCard from "../SharedComponent/WorkCard";
import {exercises , user} from '../../api/workout.json';
class TodayWorkout extends Component {
  state = {
    exercises: exercises,
  };
  
  render() {
    const { exercises } = this.state;
    const ExerciseDay = JSON.parse(localStorage.getItem('updatedExercies'));
    if(ExerciseDay){
    const dayid = ExerciseDay.map(exercise => exercise.dayid)
    return (
      <div className="Main">
        <Navbar className="Navbar_Main"/>
        <div className='list'>
        <Link to='/edit'> <div className="icon"><i className="far fa-edit icon" /></div> </Link>  
          <p className="Welcome">Welcome Mr. {user.username}</p>
          <div className="Card_list">
          {console.log(dayid[0] === (new Date().getDay()).toString())}
        { (dayid[0] === (new Date().getDay()).toString())?
            <ul className="card--list">
            {exercises.map(exercise => <WorkCard key={exercise.id} {...exercise} />)}
            </ul>
          :
            <h5 className='Msg'>There is no Exercise For Today ... !</h5>
          }
          </div>
        </div>
      </div>
    );
  }else{
    return <Redirect to='/editexercises' />
  }
  }
}

export default TodayWorkout;
