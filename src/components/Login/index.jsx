import React  from 'react';
import Input from '../SharedComponent/input';
import Button from '../SharedComponent/button'
import './index.css';

const Login =({email, handleChange, handleClick , password , error})=> {
    return (
      <div className='bodydiv'>
        <h1 className='title'><span className='work'>Work</span>Out</h1>
        <div className='form'>
          <Input
            id="email"
            value={email}
            onChange={handleChange}
            name={"email"}
            type='email'
            className='input'
            placeholder='Email '
          />
          <br />
          <br />
          <Input
            id="password"
            value={password}
            onChange={handleChange}
            name={"password"}
            type='password'
            className='input'
            placeholder='Password'
          />
          <br />
          <label className='error'>{error}</label>
          <br />
          <Button 
          buttonText='login'
          id='loginbtn' 
          onClick={()=>handleClick()} 
          className='submitbtn' />
        </div>
      </div>
    )
  
}

export default Login;