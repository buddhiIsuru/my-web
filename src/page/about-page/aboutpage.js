import React from 'react';
import './aboutpage.css';
import profile from '../../assets/profile-imege.png'
import MainComponent from '../../components/mainComponent/MainComponent';
import TitleComponent from './../../components/titleComponent/TitleComponent';
import transition from '../../transition';

function ProfileImage({ profileImage }) {
    return (
        <div className='profile-image-section'>
            <img src={profileImage} alt="profile" />
        </div>
    );
}
function ProfileDescription({ description }) {
    return (
        <div className='description-section'>
            <p>{description}</p>
        </div>
    );
}

const AboutPage = () => {
    return (
        <MainComponent>
            <div className='about-content'>
                <ProfileImage profileImage={profile} />
                <div className='profile-detail-section'>
                    <TitleComponent title={"About Me"} />
                    <ProfileDescription
                        description={"Hello guys! I'm Buddhi Isuru. I am fascinated by how computer technology has brought changes to our lives that could never have been predicted; witnessing the expansion of computer science allowed me to consider studying software engineering from an early age, and my enthusiasm has perpetually developed since this time."} />
                    {/* <button className='download-cv-button'>Download CV</button> */}
                </div>
            </div>
        </MainComponent>
    )
}

export default transition(AboutPage);