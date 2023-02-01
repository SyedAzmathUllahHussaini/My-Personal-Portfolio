import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import "../Styles/Navbar.css";
import {GiHamburgerMenu} from "react-icons/gi"

function Navbar() {

    const [openNavbar, setOpenNavbar] = useState(false);

    const location = useLocation;

    useEffect(()=>{
        setOpenNavbar(false)
    },[location]);


  return (
    <div className='Navbar' id={openNavbar ? "open": "close"}>
        <div className="togglebutton">
        <button onClick={() => {
            setOpenNavbar((prev) => !prev); }}>
            <GiHamburgerMenu/>
        </button>
        </div>
        <div className="Links">
            <Link to="/">Home</Link>
            <Link to="/project">Project</Link>
            <Link to="/experience">Experience</Link>

        </div>
    </div>
  )
}

export default Navbar
