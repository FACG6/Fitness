import React, {
  Component
} from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/TodayWorkout/TodayWorkout';
import Edit from './components/Edit'

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() { 
  const email = localStorage.getItem('email');
    const isLogged = email==='fatma.o.siam@gmail.com';
      return (
        <Router>
          <Route path="/login" exact render={() => (!isLogged ? <Login /> : <Home />)} />
          <Route path='/'   exact  render={()=>(isLogged ? <Home /> : <Login /> )}/>
          <Route path='/edit'  exact render={()=>(isLogged ? <Edit /> : <Login />)}/>
        </Router>
      )  
  
}

export default App;
