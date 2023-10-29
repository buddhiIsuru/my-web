import React, { useEffect, useState } from 'react';
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';
import MobileNav from './MobileNav/MobileNav';



const Navbar = ({location,windowDimensions}) => {

    return (
        <>
            {
                windowDimensions.width>600?
                    <nav>
                        <ul className="nav-button-list">
                            <li className={location.pathname === "/" ? "nav-select" : "nav-unselect"}>
                                <Link to={'/'} >Home</Link>
                            </li>
                            <li className={location.pathname === "/about" ? "nav-select" : "nav-unselect"}>
                                <Link to={'/about'} >About</Link>
                            </li>
                            <li className={location.pathname === "/resume" ? "nav-select" : "nav-unselect"}>
                                <Link to={'/resume'} >Resume</Link>
                            </li>
                            <li className={location.pathname === "/project" ? "nav-select" : "nav-unselect"}>
                                <Link to={'/project'} >Project</Link>
                            </li>
                            <li className={location.pathname === "/Contact" ? "nav-select" : "nav-unselect"}>
                                <Link to={'/Contact'} >Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    :
                    <MobileNav/>
            }
        </>
    )
}

export default Navbar;

