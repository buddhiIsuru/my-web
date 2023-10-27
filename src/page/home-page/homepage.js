import React from 'react';
import './homepage.css';
import SocialMediaButtonList from '../../components/social-buttons/socialButton';
import MainComponent from '../../components/mainComponent/MainComponent';
import transition from '../../transition';
import ParticlesComponents from '../../components/ParticlesComponents/ParticlesComponent';

function GreetingSection({ greeting }) {
    return (
        <div className='greeting-section'>
            <p>{greeting}</p>
            <div className='gold-line'></div>
        </div>
    )
}
function NameSection({ name }) {
    return (
        <div className='name-section'>
            <h1>{name}</h1>
        </div>
    )
}
function ProfessionalSection({ professional }) {
    return (
        <div className='profeshion-section'>
            <p>{professional}</p>
        </div>
    )
}

const HomePage = () => {
    return (
        <MainComponent>
            <ParticlesComponents />
            <div className='banner-content'>
                <div>
                    <GreetingSection greeting={"hi im"} />
                    <NameSection name={"BUDDHI ISURU"} />
                    <ProfessionalSection professional={"Professional Software Engineer / Programmer"} />
                    <div className='social-meadia-icons'>
                        <SocialMediaButtonList color={"black"} />
                    </div>
                </div>
            </div>
        </MainComponent>
    )
}

export default transition(HomePage);