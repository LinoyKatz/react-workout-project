import React from 'react'

import './welcomeSectionButton.css'
import { GrLinkNext } from "react-icons/gr";

const WelcomeSectionButton = () => {
  return (
      <section className='welcome-sct'>

      <button className='wlcome-btn'>To my own planner <GrLinkNext color='white'/> </button>
      </section>
  )
}

export default WelcomeSectionButton
