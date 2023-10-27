import React from "react";
import "./socialButton.css";

function SocialMediaButton({ icon, onClick,textColor }) {
    return (
        <li>
            <button className="social-button" onClick={onClick} style={{color:textColor}} >
                {icon}
            </button>
        </li>
    )
}

const SocialMediaButtonList = ({ color }) => {

    const openSocialMediaInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <ul class="social-button-list">
            <SocialMediaButton
                icon={<i class="fa fa-facebook" aria-hidden="true"></i>}
                textColor={color}
                onClick={() => openSocialMediaInNewTab("https://web.facebook.com/buddhi.isuru.5")}
            />
            <SocialMediaButton
                icon={<i class="fa fa-linkedin" aria-hidden="true"></i>}
                textColor={color}
                onClick={() => openSocialMediaInNewTab("https://www.linkedin.com/in/buddhi-isuru-208a47151/")}
            />
            <SocialMediaButton
                icon={<i class="fa fa-github" aria-hidden="true"></i>}
                textColor={color}
                onClick={() => openSocialMediaInNewTab("https://github.com/buddhiIsuru")}
            />
            <SocialMediaButton
                icon={<i class="fa fa-whatsapp" aria-hidden="true"></i>}
                textColor={color}
                onClick={() => openSocialMediaInNewTab("//api.whatsapp.com/send/?phone=07017673696&text&type=phone_number&app_absent=0")}
            />
        </ul>
    )
}

export default SocialMediaButtonList;