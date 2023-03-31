import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

import "./hamburgButton.css";
import "./appHeader.css";

//nav option on mobile
const HamburgButton = () => {
  const [navBar, setNavBar] = useState(false);
  return (
    <div>
      {/* <button className='menu-hamburger' onClick={()=>{setNavBar(!navBar)}} >
         <HiMenu size={40}/>
      </button> */}

      <div
        className="switch"
        onClick={() => {
          setNavBar(!navBar);
        }}
      >
        <input type="checkbox" />
        <div>
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
        </div>
      </div>
      <br />
      {/* {navBar?'yes':'no'} */}
      {navBar && (
        <ul className="nav-open">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/training">
            <li>My Workouts</li>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default HamburgButton;
