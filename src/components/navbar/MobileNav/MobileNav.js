import React, { useEffect, useState } from 'react';
import './MobileNav.css';
import { Link, useLocation } from 'react-router-dom';
import Hamburg from '../../Hamburg/Hamburg';
import transition from './../../../transition';

const MobileNav = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <Hamburg isOpen={isOpen} setIsOpen={setIsOpen} />
            {
                isOpen ?
                    <div className='mobile-nav'>
                        <ul className="mobile-nav-button-list">
                            <Link to={'/'} onClick={()=>setIsOpen(false)} >
                                <li className={location.pathname === "/" ? "mobile-nav-select" : "mobile-nav-unselect"}>
                                    Home
                                </li>
                            </Link>
                            <Link to={'/about'} onClick={()=>setIsOpen(false)} >
                                <li className={location.pathname === "/about" ? "mobile-nav-select" : "mobile-nav-unselect"}>
                                    About
                                </li>
                            </Link>
                            <Link to={'/resume'} onClick={()=>setIsOpen(false)} >
                                <li className={location.pathname === "/resume" ? "mobile-nav-select" : "mobile-nav-unselect"}>
                                    Resume
                                </li>
                            </Link>
                            <Link to={'/project'} onClick={()=>setIsOpen(false)} >
                                <li className={location.pathname === "/project" ? "mobile-nav-select" : "mobile-nav-unselect"}>
                                    Project
                                </li>
                            </Link>
                            <Link to={'/Contact'} onClick={()=>setIsOpen(false)} >
                                <li className={location.pathname === "/Contact" ? "mobile-nav-select" : "mobile-nav-unselect"}>
                                    Contact
                                </li>
                            </Link>
                        </ul>
                    </div>
                    :
                    null
            }
        </>
    )
}

export default transition(MobileNav);