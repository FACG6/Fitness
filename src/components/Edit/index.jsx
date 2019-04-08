import './edit.css';
import React, { Component } from 'react';
import Navbar from '../SharedComponent/Navbar';
import Button from '../SharedComponent/button';
import { Redirect } from 'react-router-dom';
import { exercises } from '../../api/workout.json';
import Exerciselst from './EditExe/Exerciselst/Exerciselst'
import Icons from '../SharedComponent/icon';
class Edit extends Component {

  state = {
    istoggledDay: false,
    istoggledExe: false,
  }
  handleClickDay = () => {
    this.setState({ istoggledDay: true });
  }
  handleClickExe = () => {
    this.setState({ istoggledExe: true });
  }
  render() {
    const days = JSON.parse(localStorage.getItem('updatedDay'));
    if(days){
      const { istoggledDay, istoggledExe } = this.state;
      return (
        <div>
          {istoggledDay ? <Redirect to='/editdays' /> : null}
          {istoggledExe ? <Redirect to='/editexercises' /> : null}
          <Navbar />
          <Icons />
          <div className='Edit'>
            <div className='days'>
              <Button
                buttonText='Days'
                id='loginbtn'
                onClick={this.handleClickDay}
                className='submitbtn' />
              <ul className='daylst'>
                {days.map((day, index) => <li key={index}>{day.name}</li>)}
              </ul>
            </div>
            <div className='exercises'>
              <Button
                buttonText='Exercises'
                id='loginbtn'
                onClick={this.handleClickExe}
                className='submitbtn' />
              <ul className='exerciselst'>
                {days.map((day, index) => {
                  const exercise = exercises.map(exercise => <Exerciselst key={exercise.id} dayid ={day.id}{...exercise} />);
                  switch (day.id) {
                    case '0': return <li key={index}>{day.name} <ul className='exelst'> {exercise}</ul></li>
                    case '1': return <li key={index}>{day.name} <ul className='exelst'> {exercise}</ul> </li>
                    case '2': return <li key={index}>{day.name} <ul className='exelst'> {exercise}</ul></li>
                    case '3': return <li key={index} >{day.name} <ul className='exelst'> {exercise}</ul></li>
                    case '4': return <li key={index}>{day.name} <ul className='exelst'> {exercise}</ul></li>
                    case '5': return <li key={index}>{day.name} <ul className='exelst'> {exercise}</ul></li>
                    case '6': return <li key={index}>{day.name} <ul className='exelst'> {exercise}</ul></li>
                    default: return <li>...</li>
                  }
                })}
              </ul>
            </div>
          </div>
        </div>
      )
    } else{
      return <Redirect to='/editdays'/>
    }
    
  }
}
export default Edit;