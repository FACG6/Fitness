import React, { Component } from 'react';
import Input from '../Input/index';
import Button from '../button/index'
import './index.css';
import { Redirect } from "react-router-dom";

export default class Login extends Component {

  state = {
    email: '',
    password: '',
    success: false
  };
  handleInput = ({ target: { value, name } }) => {
    this.setState({ [name]: value});
  }
  handleClick = () => {
  
    if ((this.state.email).toLowerCase() === 'fatma.o.siam@gmail.com' && this.state.password === '123123') {
      this.setState({ success: true })
      localStorage.setItem('email', this.state.email);
      localStorage.setItem('password',this.state.password);
    }
    else {
      this.setState({ email :'' , password:''});
      const error=   document.getElementById('error');
      error.style.color='red';
    error.textContent='Check your Email or Passwors Error';
    }
  }
  render() {
    return (
      <div className='bodydiv'>
        <h1 className='title'><span className='work'>Work</span>Out</h1>
        <div className='form'>
          <Input
            id="email"
            value={this.state.email}
            onChange={this.handleInput}
            name={"email"}
            type='email'
            className='input'
            placeholder='Email '
          />
          <br />
          <br />
          <Input
            id="password"
            value={this.state.password}
            onChange={this.handleInput}
            name={"password"}
            type='password'
            className='input'
            placeholder='Password'
          />
          <br />
          <label id='error'></label>
          <br />
          <Button buttonText='login' id='loginbtn' onClick={this.handleClick} className='submitbtn' />
          {this.state.success && (<Redirect to='/' />)}
        </div>
      </div>
    )
  }
}