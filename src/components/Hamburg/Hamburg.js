import React, { useState } from "react";
import './Hamburg.css'

const Hamburg = ({isOpen,setIsOpen}) => {    

    return (
        <div className="container-row">
            <div className="ham-container" onClick={() => setIsOpen(!isOpen)}>
                <div className={isOpen ? "bar change-bar1" : "bar"}></div>
                <div className={isOpen ? "bar change-bar2" : "bar"}></div>
                <div className={isOpen ? "bar change-bar3" : "bar"}></div>
            </div>
        </div>
    )
}

export default Hamburg;