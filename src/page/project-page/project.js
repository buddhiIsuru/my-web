import React, { useState, useEffect, useRef } from 'react';
import './project.css';
import profile from '../../assets/profile-imege.png'
import Progresbar from '../../components/progresbar/progresbar';
import ExpirienceCard from '../../components/expirience-card/expirienceCard';
import ProjectCard from '../../components/project-card/projectCard';
import TitleComponent from '../../components/titleComponent/TitleComponent';
import { projectsData } from '../../consts/data';
import transition from '../../transition';

const ProjectPage = ({componentRef}) => {
    return (
        <div className='project-section' ref={componentRef}>
            <div className='title-div'>
                <TitleComponent title={"Some Of My Projects"} />
            </div>
            <div className='project-content'>
                {
                    projectsData.map(
                        (obj, index) =>
                            <ProjectCard
                                projectName={obj.projectName}
                                companyName={obj.companyName}
                                projectDescription={obj.projectDescription}
                                techStack={obj.techStack}
                            />
                    )
                }
            </div>
        </div>
    )
}

export default transition(ProjectPage);