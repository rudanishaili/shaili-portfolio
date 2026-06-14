import { projects } from "../../data/projects";

export default function ProjectsPage() {
  return (
    <main>
      <section>
        <h1>Projects</h1>

        {projects.map((project) => (
          <div key={project.title}>
            <h2>{project.title}</h2>

            <p>{project.category}</p>

            <p>{project.description}</p>

            <p>
              {project.tech.join(" • ")}
            </p>

            <hr />
          </div>
        ))}
      </section>
    </main>
  );
}