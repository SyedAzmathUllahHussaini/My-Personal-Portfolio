import React from 'react'
import {AiOutlineWhatsApp,AiFillGithub,AiFillMail,AiOutlineLinkedin} from "react-icons/ai";
import "../Styles/Home.css";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h2>Hi, I am Syed Azmath Ullah Hussaini</h2>
            <div className='prompt'>
                <p>A Frontend Developer with a passion for learning and Creating..</p>
                <Link to="https://github.com/SyedAzmathUllahHussaini"><AiFillGithub/></Link>
                 <Link to="www.linkedin.com/in/syedazmath"><AiOutlineLinkedin/></Link>
              <Link to="https://web.whatsapp.com/"><AiOutlineWhatsApp/></Link>  
              <Link to="https://www.gmail.com"><AiFillMail/></Link>
                              
                <div className='skills'>
                    <h2>Skills</h2>
                    <ol className='list' >
                        <li className='item' >
                            <h3>Front-End</h3>
                            <span> React.Js JavaScript HTML5/CSS3 Bootstrap React Libraries</span>
                            {/* <span> JavaScript</span>
                            <span> HTML5/CSS3</span>
                            <span> Bootstrap</span>
                            <span> React Libraries</span> */}
                        </li>
                    </ol>
                    <ol className='list' >
                        <li className='item' >
                            <h3>Back-End</h3>
                            <span>Java MySQL SQL Express.Js</span>
                            {/* <span>Java</span>
                            <span> MySQL</span>
                            <span>Express.Js</span> */}
                        </li>
                    </ol>
                    <ol className='list' >
                        <li className='item' >
                            <h3>Other Languages</h3>
                            <span>Git, Github, C++, C</span>
                            {/* <span>Git</span>
                            <span>Github</span>
                            <span>C++</span>
                            <span>C</span> */}
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Home

