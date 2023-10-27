import React from 'react';
import './progresbar.css';

const Progresbar = (props) => {
    return (
        <div className='progres-container'>
            <div className='progres-detail-container'>
                <p className='progres-label text-left'>{props.label}</p>
                <p className='progres-label text-right'>{props.count}%</p>
            </div>
            <div className='progres-track'>
                <div className='progres' style={{width:props.count<=100?props.count+'%':'100%'}}></div>
            </div>
        </div>
    )
}

export default Progresbar;