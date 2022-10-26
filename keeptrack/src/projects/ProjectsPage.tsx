import { MOCK_PROJECTS } from './entitites/MockProjects';
import ProjectList from './ProjectList';

function ProjectsPage() {
    return (
    <>
    <h1>Projects</h1>
    <ProjectList projects={MOCK_PROJECTS} />
    </>
    );
    // <pre>{JSON.stringify(MOCK_PROJECTS, null, ' ')}</pre>
}

export default ProjectsPage;