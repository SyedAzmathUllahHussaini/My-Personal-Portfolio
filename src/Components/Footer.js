import React from 'react'
import {AiOutlineWhatsApp,AiFillGithub,AiFillMail,AiOutlineLinkedin} from "react-icons/ai";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <AiOutlineWhatsApp/>
        <AiFillGithub/>
        <AiFillMail/>
        <AiOutlineLinkedin/>
      </div>
      <p>&copy; 2023 syed.com</p>
    </div>
  )
}

export default Footer
