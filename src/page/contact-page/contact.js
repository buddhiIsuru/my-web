import React from 'react';
import './contact.css';
import ContactCard from '../../components/contact-card/contactCard';
import MainComponent from '../../components/mainComponent/MainComponent';
import TitleComponent from '../../components/titleComponent/TitleComponent';
import SocialMediaButtonList from '../../components/social-buttons/socialButton';
import { Link } from 'react-router-dom';
import transition from '../../transition';
import ParticlesComponents from '../../components/ParticlesComponents/ParticlesComponent';
import logo from '../../assets/profile-imege.png';

function FooterNav() {
    return (
        <ul class="footer-nav-button-list">
            <li>Buddhi</li>
            <li>Isuru</li>
        </ul>
    )
}
function Footer() {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <SocialMediaButtonList color={"white"} />
                <br />
                <FooterNav />
            </div>
        </div>
    )
}

const ContactPage = () => {
    return (
        <MainComponent>
            <ParticlesComponents />
            <div className='contact-section'>
                <div className='contact-left-section'>
                    <TitleComponent title={"Get In Touch"} />
                </div>
                <br />
                <div className='contact-row'>
                    <div className=''>
                        <ContactCard
                            icon={<i class="fa fa-envelope" aria-hidden="true"></i>}
                            value={"buddhiisuru1@gmail.com"}
                        />
                        <SocialMediaButtonList color={"white"} />
                    </div>
                </div>
            </div>
            <div className='footer'>
                <p className='copyright-text'>© {new Date().getFullYear()} Buddhi Isuru</p>
            </div>
        </MainComponent>
    )
}

export default transition(ContactPage);