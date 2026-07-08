function Project({ title, description}) {
    return (
        <div className="project">
            <h2>{title}</h2>
            <div>{description}</div>
        </div>
    );
}

export default Project;