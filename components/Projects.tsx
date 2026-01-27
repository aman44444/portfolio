import React from "react";
import Card from "./Card";
import { ProjectItem, ProjectModalProps } from "@/types/project";

interface ProjectProps extends ProjectModalProps {
  projects: ProjectItem[];
}

const Project = ({ isProjectVisible, onClose, projects =[] }: ProjectProps) => {
  if (!isProjectVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="projects-title"
    >
      <div className="relative w-11/12 md:w-3/4 h-4/5 md:h-3/4 bg-white rounded-xl overflow-auto
                      [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

        <header className="h-1/6 flex items-center justify-between px-4 md:px-6 py-4">
          <h2
            id="projects-title"
            className="text-2xl md:text-3xl font-semibold"
          >
            Projects
          </h2>

          <button
            onClick={onClose}
            aria-label="Close projects modal"
            className="h-8 w-8 rounded-full border-2 flex items-center justify-center
                       hover:bg-gray-200 transition"
          >
            ✕
          </button>
        </header>

        <div className="border-t border-gray-300 mt-1" />

        <section className="flex flex-wrap justify-center gap-6 p-6">
          {projects?.map((project) => (
            <div
              key={project.title}
              className="relative h-40 w-full md:w-1/4 rounded-xl flex items-end"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Card
                title={project.title}
                description={project.description}
                githubLink={project.githubLink}
                projectLink={project.projectLink}
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};


export default Project;
