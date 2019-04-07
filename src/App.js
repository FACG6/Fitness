import React, { Component } from 'react'
import './App.css';
import Login from './components/Login';
import Home from './components/TodayWorkout/TodayWorkout';
import Edit from './components/Edit'
import { BrowserRouter as Router, Route , Redirect, Switch} from "react-router-dom";



export default class App extends Component {
  state = {
    isLogged: false, 
    email: '',
    password: ''
  }
  
  handleLogin = () => (this.state.email === '1' && this.state.password === '1' ) ? this.setState({isLogged: true}) : null;
   
     
  handleInput = ({ target: { value, name } }) => this.setState({ [name]: value});

  render() {
    const { isLogged, email, password } = this.state;
    return (
      <div>
        <Router>
          <Switch>
          <Route path="/login" exact render={() => (!isLogged ? 
          <Login  
            email={email} 
            password={password} 
            handleClick={this.handleLogin} 
            handleChange={this.handleInput}
          /> : <Redirect to='/' />)} />
          <Route path='/'   exact  render={()=>(isLogged ? <Home /> : <Login 
            email={email} 
            password={password} 
            handleClick={this.handleLogin} 
            handleChange={this.handleInput}/> )}/>
          <Route path='/edit'  exact render={()=>(isLogged ? <Edit /> : <Login />)}/>
          </Switch>
        </Router>
        
      </div>
    )
  }
}
