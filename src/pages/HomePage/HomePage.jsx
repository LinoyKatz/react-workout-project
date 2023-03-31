import React from 'react'

import { Link } from 'react-router-dom'
import WelcomeSectionButton from '../../components/WelcomeSection/WelcomeSectionButton'
import './homePage.css'
import { FiCheckCircle } from "react-icons/fi";
import TRXGIRL from '../../media/trx.png.png'
import WORKINGOUT from '../../media/workingOut.png.png'


const HomePage = () => {
  return (
    <div>
      <h1 className='welcome-h1'>Welcome to our studio</h1>

      <div className='welcome-section'>
      {/* <article>
        <h2>Great to have you back here...</h2>
        <hr />
     </article> */}

      
      <section className='about-section'>
        <span> Hello! </span>
        <br />
        <p> Our workout planner app is a mobile application designed to help users plan, track, and achieve their fitness goals! </p><br />
        <Link to="/training">
        <WelcomeSectionButton/>
      </Link>
         
          <section className='first-about-section'>
             <img className='grl-img' src={TRXGIRL} alt="trx-girl" />
           <br /> <br />
         <ul className='fst-ul'>
           <li>On our app you can easily</li>
          <li><FiCheckCircle color='green' size='20px'/> Register/remove yourself from classes in our studio</li>
          <li><FiCheckCircle color='green' size='20px'/> filter your workouts by your chosen coach/exercise</li>
          <li><FiCheckCircle color='green' size='20px'/> Easily track your progress by seeing your previous and future workouts</li>
</ul>
  
         <br />
        
         </section>
         <section className='second-about-section'>
        <img className='working-out-img' src={WORKINGOUT} alt="working-out-guys" />
          <br /><br />

<ul className='scnd-ul'>
  <li>We also have</li>
  <li><FiCheckCircle color='green' size='20px'/> workout videos and Explanations</li>
  <li><FiCheckCircle color='green' size='20px'/> edit option for your own workout plan</li>
  <li><FiCheckCircle color='green' size='20px'/> workout videos</li>
</ul>
</section>
      </section>
      </div>
    </div>
  )
}

export default HomePage
