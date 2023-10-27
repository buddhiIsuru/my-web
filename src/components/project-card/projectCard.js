import React from 'react';
import './projectCard.css'

const ProjectCard = (props) => {
    return (
        <div className='project-card'>
            <p className='project-name'>
                {props.projectName}
            </p>
            <p className='comapny-name'>
                {props.companyName}
            </p>
            <p className='project-description'>
                {props.projectDescription}
            </p>
            <p className='tech-stack'>
                {props.techStack}
            </p>
        </div>
    )
}

export default ProjectCard;