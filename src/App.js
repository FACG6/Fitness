import React, { Component } from 'react'
import './App.css';
import Login from './components/Login';
import Home from './components/TodayWorkout/TodayWorkout';
import Edit from './components/Edit'
import { BrowserRouter as Router, Route , Redirect, Switch} from "react-router-dom";
import { user } from './api/workout.json'
console.log(user.email)
export default class App extends Component {
  state = {
    isLogged: false, 
    email: '',
    password: ''
  };
  handleLogin = () => (this.state.email === user.email && this.state.password === user.password ) ? this.setState({isLogged: true}) : null;
  handleInput = ({ target: { value, name } }) => this.setState({ [name]: value});

  render() {
    const { isLogged, email, password } = this.state;
    const login = <Login 
                    email={email} 
                    password={password} 
                    handleClick={this.handleLogin} 
                    handleChange={this.handleInput}/> ;
    return (
      <div>
        <Router>
          <Switch>
          <Route path="/login" exact render={() => (!isLogged ? login : <Redirect to='/' />)} />
          <Route path='/'   exact  render={()=>(isLogged ? <Home /> : login)}/>
          <Route path='/edit'  exact render={()=>(isLogged ? <Edit /> : login)}/>
          </Switch>
        </Router>
      </div>
    )
  }
}
