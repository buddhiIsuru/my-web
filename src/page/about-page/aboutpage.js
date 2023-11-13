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
                        description={"Hello guys! I'm Buddhi Isuru, a passionate individual captivated by the transformative impact of computer technology on our daily lives. The ever-evolving landscape of computer science has intrigued me from a young age, sparking a keen interest in software engineering. My journey has been marked by a continuous enthusiasm for exploring and contributing to the dynamic world of technology. Excited to delve deeper into the realm of software engineering, I'm driven by a relentless curiosity and a commitment to making a positive impact through innovation."} />
                    {/* <button className='download-cv-button'>Download CV</button> */}
                </div>
            </div>
        </MainComponent>
    )
}

export default transition(AboutPage);