import Project from "./Project";

export type ProjectData = {
    name: string;
    timeline: string;
    description: string;
};

function Projects() {

    const projects: ProjectData[] = [
        {
            name: "Minecraft Server Analytics Website",
            timeline: "April 2026 - Present",
            description: "Description of Project 1",
        },
        {
            name: "Minecraft Minigames Server - Minezone",
            timeline: "December 2023 - Present",
            description: "Description of Project 1",
        }
    ];

    return (
        <section id="projects">
            <h1>Projects</h1>

            {projects.map((project) => (
                <Project
                    key={project.name}
                    project={project}
                />
            ))}
        </section>
    );
}

export default Projects;