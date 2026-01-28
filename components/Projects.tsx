import React from "react";
import Card from "./Card";
import { ProjectItem, ProjectModalProps } from "@/types/project";
import Modal from "./Modal/Modal";

interface ProjectProps extends ProjectModalProps {
  projects: ProjectItem[];
}

const Project = ({ isOpen, onClose, projects = [] }: ProjectProps) => {
  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Projects"
      labelledBy="projects-title"
    >
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
    </Modal>
  );
};

export default Project;
