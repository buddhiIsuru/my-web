import React from 'react';
import './contactCard.css'

const ContactCard = (props) => {
    return (
        <button className='contact-card' onClick={() => window.location = 'mailto:buddhiisuru1@gmail.com'}>
            <p className='contact-value'>
                {props.value}
            </p>
        </button>
    )
}

export default ContactCard;