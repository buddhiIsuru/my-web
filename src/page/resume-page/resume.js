import React from 'react';
import './resume.css';
import Progresbar from '../../components/progresbar/progresbar';
import ExpirienceCard from '../../components/expirience-card/expirienceCard';
import MainComponent from '../../components/mainComponent/MainComponent';
import TitleComponent from '../../components/titleComponent/TitleComponent';
import transition from '../../transition';

function LeftSection() {
    return (
        <div className='left-section'>
            <TitleComponent title={"Skils"} />
            <Progresbar label={"Spring Boot"} count={65} />
            <Progresbar label={"React Js"} count={80} />
            <Progresbar label={"Redux"} count={60} />
            <Progresbar label={"Next Js"} count={50} />
            <Progresbar label={"Mysql"} count={75} />
        </div>
    )
}
function MiddleSection() {
    return (
        <div className='middle-section'>
            <TitleComponent title={"Education"} />
            <ExpirienceCard
                company={"Diploma In Software Engineering "}
                duration={"2017 Oct - 2019 Apr"}
                description={"Institute Of Software Engineering (IJSE)"}
            />
        </div>
    )
}
function RightSection() {
    return (
        <div className='right-section'>
            <TitleComponent title={"Expirience"} />
            <div className='scroll-section'>
                <ExpirienceCard
                    company={"Software Engineer (Intern) - Commercial Technologies Plus (pvt) Ltd"}
                    duration={"Feb 2019 to Aug 2019"}
                    description={"I was working with Java and Javascript platforms, Web Apps development (Angular / Spring boot / Mysql) of extreme projects."}
                />
                <ExpirienceCard
                    company={"Software Engineer - Sentura Technologies (pvt) Ltd"}
                    duration={"Nov 2019 to  Sap 2021"}
                    description={"I was working with Java and Javascript platforms, Web Apps development (React Js / Spring boot / Mysql) of extreme projects."}
                />
                <ExpirienceCard
                    company={"Software Engineer - Commercial Technologies Plus (pvt) Ltd"}
                    duration={"Oct 2021  to Current"}
                    description={"I was working with Javascript platforms, Web Apps development (React Js) of extreme projects."}
                />
            </div>
        </div>
    )
}

const ResumePage = () => {
    return (
        <MainComponent>
            <div className='resume-content'>
                <LeftSection />
                <MiddleSection />
                <RightSection />
            </div>
        </MainComponent>
    )
}

export default transition(ResumePage);