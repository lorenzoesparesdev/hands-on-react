import React, { ReactElement } from 'react';
import { Project } from './entitites/Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

interface ProjectListProps {
    projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
    return (
        <div className='row'>
            {projects.map((project) => (
                <div key={project.id} className="cols-sm">
                    <ProjectCard project={project} />
                    <ProjectForm project={project} />
                </div>
            ))};
        </div>
    );
    // <ul>
    // {projects.map((project) => (
    //     <li key={project.id}>{project.name}</li>
    // ))}
    // </ul>
    // return <pre>{JSON.stringify(projects, null, ' ')}</pre>;
}

export default ProjectList;