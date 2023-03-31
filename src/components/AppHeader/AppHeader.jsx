import React from 'react' 
import { Link } from 'react-router-dom'

import "./appHeader.css";
// import HeaderButton from './Header-Button/HeaderButton';
import Logo from './Logo/Logo';

import HamburgButton from './HamburgButton';

const AppHeader = () => {
  
 

  return (
    <div className='header'>
    
      <Link to="/">
        <Logo/>
      </Link>
      <HamburgButton />
      
     
    </div>
  )
}

export default AppHeader
