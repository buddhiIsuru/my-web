import React from 'react';
import './expirienceCard.css'

const ExpirienceCard = (props) => {
    return (
        <div className='expirience-section'>
            <p className='expirience-comapny-name'>
                {props.company}
            </p>
            <p className='expirience-position-duration'>
                {props.duration}
            </p>
            <p className='expirience-position-description'>
                {props.description}
            </p>
        </div>
    )
}

export default ExpirienceCard;