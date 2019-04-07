import React, { Component } from 'react'
import './App.css';
import Login from './components/Login';
import Home from './components/TodayWorkout/TodayWorkout';
import Edit from './components/Edit'
import { BrowserRouter as Router, Route , Redirect, Switch} from "react-router-dom";
import { user } from './api/workout.json'
export default class App extends Component {
  state = {
    isLogged: false, 
    email: '',
    password: '',
    error: null
  };

  handleLogin = () => {
    if(this.state.email === user.email && this.state.password === user.password ) {
      localStorage.setItem('email', this.state.email);
      localStorage.setItem('password',this.state.password);
      this.setState({isLogged: true}) 
    } else {
      this.setState({ error : 'Check your Email or Passwors Error'});
    }
  }
  handleInput = ({ target: { value, name } }) => this.setState({ [name]: value});
  render() {
    const islogged = localStorage.getItem('email') === user.email && localStorage.getItem('password') === user.password;

    const { email, password, error } = this.state;
    const login = <Login 
                    email={email} 
                    password={password} 
                    handleClick={this.handleLogin} 
                    handleChange={this.handleInput}
                    error={error ? error : null} /> ;
    return (
      <div>
        <Router>
          <Switch>
          <Route path="/login" exact render={() => (!islogged ? login : <Redirect to='/' />)} />
          <Route path='/'   exact  render={()=>(islogged ? <Home /> : login)}/>
          <Route path='/edit'  exact render={()=>(islogged ? <Edit /> : login)}/>
          </Switch>
        </Router>
      </div>
    )
  }
}
