import './index.css';
import React, { Component } from 'react';
import Navbar from '../../SharedComponent/Navbar';
import Button from '../../SharedComponent/button';
import { Redirect } from 'react-router-dom';
import {days} from '../../../api/workout.json';
import Input from '../../SharedComponent/input';
import Icons from '../../SharedComponent/icon';
class Edit extends Component {

  state={
    isDone: false,
    days:days,
    updatedDay:[],
  };

  handleClick =()=>{
    localStorage.setItem('updatedDay', JSON.stringify(this.state.updatedDay));
    this.setState({isDone :true});
  }
  handlecheckbox = ({ target: { value , dataset} }) => this.setState(({updatedDay }) =>{
      updatedDay = updatedDay.push({id : value  , name: dataset.attr});
      return updatedDay ;   
  });

  render() {
    const { isDone, days} = this.state;
    return (
      <div>
      {isDone ? <Redirect to ='/editexercises'/> : null}
        <Navbar />
      <Icons /> 
        <div className='Edit'>
          <div className='days'>
          <Button 
            buttonText='Days'
            id='loginbtn' 
            className='submitbtn' />
            <ul className='daylst'>
            {days.map(day=>
              <Input labelText={day.name} 
              id={day.id}
              type='checkbox'
              key={day.id}
              value={day.id}
              data-attr={day.name}
              className='checkbox'
              onChange={this.handlecheckbox}
              checked={this.state.checked}
              />
            )}
            </ul>
            <Button 
            buttonText='Done'
            id='loginbtn' 
            onClick={this.handleClick} 
            className='donebtn' />
          </div>
                
        </div>
      </div>
    )
  }
}
export default Edit;