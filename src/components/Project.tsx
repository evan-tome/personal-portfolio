import type { ProjectData } from "./Projects";

function Project({ project }: { project: ProjectData }) {
    return (
        <div className="project">
            <h2>{project.name}</h2>
            <div>{project.timeline}</div>
            <div>{project.description}</div>
        </div>
    );
}

export default Project;