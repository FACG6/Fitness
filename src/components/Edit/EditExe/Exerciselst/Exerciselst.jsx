import React from 'react';

const Exerciselst = ({ id, dayid, name }) => {
  const ExerciseDay = JSON.parse(localStorage.getItem('updatedExercies'));
  return (
    ExerciseDay.map(exercises => {
      if (exercises.dayid === dayid && exercises.exeid === id.toString()) {
        return (
          <li key={id}>
            {name}
          </li>
        )
      }
    })
  );
}

export default Exerciselst;
