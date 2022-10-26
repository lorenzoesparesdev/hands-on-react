import React from 'react';
import { Project } from './entitites/Project';

interface ProjectCardProps {
    project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="card">
            <img src={project.imageUrl} alt={project.name} />
            <section className="section dark">
                <h5 className="strong">
                    <strong>{project.name}</strong>
                </h5>
            <p>{formatDescription(project.description)}</p>
            <p>Budget : {project.budget.toLocaleString()}</p>
            {/* edit button */}
            <button 
                className="bordered"
                onClick={() => handleEditClick(project)}
            >
                <span className="icon-edit"></span>
                Edit
            </button>
            </section>
        </div>
    );
}

export default ProjectCard;

function formatDescription(description: string): string {
    return description.substring(0, 60) + '...';
}

function handleEditClick(projectBeingEdited: Project) {
    console.log(projectBeingEdited);
}