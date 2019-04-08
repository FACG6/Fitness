import React, { Component } from 'react'
import './App.css';
import Login from './components/Login';
import Home from './components/TodayWorkout/TodayWorkout';
import Edit from './components/Edit/index';
import EditDays from './components/Edit/EditDay/index';
import { BrowserRouter as Router, Route , Redirect, Switch, Link} from "react-router-dom";
import { user } from './api/workout.json';
import EditExercises from './components/Edit/EditExe/index';
export default class App extends Component {
  state = {
    isLogged: false, 
    email: '',
    password: '',
    error: null, 
  };
  handleLogin = () => {
    const {email , password } = this.state;
    if(email === user.email && password === user.password ) {
      sessionStorage.setItem('email', this.state.email);
      sessionStorage.setItem('password',this.state.password);
      localStorage.setItem('daysExercises',JSON.stringify([{dayid:2,exid:1} ,{dayid:2,exid:2}]));
      this.setState({isLogged: true}) 
    } else {
      this.setState({ error : 'Check your Email or Passwors Error'});
    }
  }
  handleInput = ({ target: { value, name } }) => this.setState({ [name]: value});
  render() {
    const islogged = sessionStorage.getItem('email') === user.email && sessionStorage.getItem('password') === user.password;
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
          <Route path='/editdays' exact render={()=>(islogged ? <EditDays /> : login)}/>
          <Route path='/editexercises' exact render={()=>(islogged ? <EditExercises /> : login)}/>
          <Route render={()=>(<div className='notfound'>
          <h1 >Page Not Found ... !! </h1>
          <h1 className=''>click <Link className='here' to ='/'>here</Link> </h1>
          </div> )}/>
          </Switch>
        </Router>
      </div>
    )
  }
}
