import React from 'react';
import "./index.css";
import { Redirect } from 'react-router-dom';

const WorkCard =({id, name, img})=>{
    const ExerciseDay = JSON.parse(localStorage.getItem('updatedExercies'));
    if(ExerciseDay){
      return(
        ExerciseDay.map(exercises => {
          if (exercises.dayid === (new Date().getDay()).toString() && exercises.exeid === id.toString()) {
            return (
            <li key={id}>
              <div className="Card">
                <img src={img} width='100%' height='155px' alt={name} />
                <div className="Container">
                    <h5 className='traning-name'>{name}</h5>
                </div>
              </div>
            </li>
          )
        }
      })
    );
    }else{
      return <Redirect to='/editexercises' />
    } 
}

export default WorkCard;
