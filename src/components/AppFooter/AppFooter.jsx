import React from 'react'
import REACTLOGO from '/FullStack2022/React/REACTprojects/trainapp/src/media/logoNoBgc.png'

import './appFooter.css'
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsWhatsapp } from "react-icons/bs";
import { SlSocialGithub } from "react-icons/sl";

const AppFooter = () => {
  return (
    <div className='footer'>
      <section className='string-section'>
      <ul>
        <li><SlSocialInstagram color='white'/></li>
        <li><SlSocialLinkedin color='white'/></li>
        <li><BsWhatsapp color='white'/></li>
        <li><SlSocialGithub color='white'/></li>
      </ul>
      </section>
      <section className='logo-section'><img src={REACTLOGO} alt="" /></section>
    </div>
  )
}

export default AppFooter
