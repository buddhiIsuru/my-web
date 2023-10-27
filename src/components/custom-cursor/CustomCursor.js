import React, { useEffect, useState } from 'react';
import './CustomCursor.css'

const CustomCursor = (props) => {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
    }, [])


    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };


    return (
        <>
            <div className="cursor" style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
            <div className="cursor2" style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
        </>
    )
}

export default CustomCursor;