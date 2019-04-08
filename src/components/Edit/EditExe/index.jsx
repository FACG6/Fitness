import React, { Component } from 'react';
import Navbar from '../../SharedComponent/Navbar';
import Button from '../../SharedComponent/button';
import { Redirect } from 'react-router-dom';
import {exercises} from '../../../api/workout.json';
import Input from '../../SharedComponent/input';
import Icons from '../../SharedComponent/icon';
import Swal from 'sweetalert2';

class EditExercises extends Component {
  state={
    isDone: false,
    updatedExercies:[],
  };
  
  handleClick =()=>{
    localStorage.setItem('updatedExercies', JSON.stringify(this.state.updatedExercies));
    Swal.fire({
      text:'added done',
      type: 'success'
    })
    this.setState({isDone :true});
  }
  handlecheckbox = ({ target: { value , dataset, name} }) => this.setState(({updatedExercies}) =>{
    updatedExercies = updatedExercies.push({exeid : value  , dayid: dataset.attr });
    return updatedExercies;
  });
  render() {
    const days =JSON.parse(localStorage.getItem('updatedDay'));
    const { isDone} = this.state;
    if(days){
      return (
        <div>
        {isDone ? <Redirect to ='/'/> : null}
          <Navbar />
          <Icons />
          <div className='Edit'>
            <div className='days'>
            <Button 
              buttonText='Exercises'
              id='loginbtn' 
              onClick={this.handleClickDay} 
              className='submitbtn' />
              <ul className='exerciselst'>
              { days.map((day, index)=>
              <li key={index}>{day.name} 
                <ul className='exelst'>
                  {exercises.map(exercise=>
                    <Input labelText={exercise.name} 
                    id={exercise.id}
                    type='checkbox'
                    key={exercise.id}
                    value={exercise.id}
                    data-attr={day.id}
                    className='exe-checkbox'
                    onChange={this.handlecheckbox}
                    name={exercise.name}
                />)}
                </ul>
              </li>)}
              </ul>
              <Button 
              buttonText='done'
              id='loginbtn' 
              onClick={this.handleClick} 
              className='donebtn' />
            </div>        
          </div>
        </div>
      )
    }
    else{
      return <Redirect to='/editdays'/>;
    }
  }
}
export default EditExercises;
