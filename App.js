import logo from './logo.svg';
import React from 'react'
//import { auth } from './authen';
import Authen from './Authen';



const App = () => {
  
 
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />

        </div>
          <Authen /> 
        </div>
    )
  
}

export default App;
