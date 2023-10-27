import React from 'react';
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    return (
        <nav>
            <ul className="nav-button-list">
                <li className={location.pathname === "/" ? "nav-select" : "nav-unselect"}>
                    <Link to={'/'} >Home</Link>
                </li>
                <li className={location.pathname==="/about"?"nav-select":"nav-unselect"}>
                    <Link to={'/about'} >About</Link>
                </li>
                <li className={location.pathname==="/resume"?"nav-select":"nav-unselect"}>
                    <Link to={'/resume'} >Resume</Link>
                </li>
                <li className={location.pathname==="/project"?"nav-select":"nav-unselect"}>
                    <Link to={'/project'} >Project</Link>
                </li>
                <li className={location.pathname==="/Contact"?"nav-select":"nav-unselect"}>
                    <Link to={'/Contact'} >Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;