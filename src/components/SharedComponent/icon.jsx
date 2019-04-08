import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import Button from './button'
class Icons extends Component{
  state={
    isloggled : false
  }
render(){
  return(
    <div className='icons'>
    <Link to='/'> <div className="icon"><i className="fas fa-home icon" /></div> </Link>
    <Button buttonText=''
          id='logoutbtn'
          onClick={()=>console.log('Enter')}
          className='fas fa-sign-out-alt logoutbtn'/> 
    
    </div>
  )
}
}
export default Icons;