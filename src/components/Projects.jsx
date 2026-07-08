import Project from "./Project";

function Projects() {
    const projects = [
        {
            name: "Minecraft Server Analytics Website",
            description: "Description of Project 1",
        },
        {
            name: "Minecraft Minigames Server - Minezone",
            description: "Description of Project 1",
        }
    ];

    return (
        <section id="projects">
            <h1>Projects</h1>

            {projects.map((project) => (
                <Project
                    key={project.name}
                    title={project.name}
                    description={project.description}
                />
            ))}
        </section>
    );
}

export default Projects;