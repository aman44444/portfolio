import React from "react";
import Card from "./Card";
import { ProjectItem, ProjectModalProps } from "@/types/project";

const PROJECTS: ProjectItem[] = [
  {
    title: "WordleXkbc",
    description:
      "A unique Wordle clone infused with the excitement of 'Kaun Banega Crorepati,' combining word guessing with thrilling quiz elements",
    image: "/assets/images/wordle.png",
    githubLink: "https://github.com/aman44444/WordlexKbc",
    projectLink: "https://wordlexkbc.netlify.app",
  },
  {
    title: "LyricLink",
    description:
      "Matches users based on their music taste. Utilized Spotify API to fetch and analyze user music preferences.",
    image: "/assets/images/lyriclink.png",
    githubLink: "https://github.com/aman44444/LyricLink",
    projectLink: "https://lyriclink.vercel.app",
  },
  {
    title: "ScoreSource",
    description:
      "A real-time sports score platform delivering live updates, match details, trending players, and top sports tweets in one clean interface.",
    image: "/assets/images/scoresource.png",
    githubLink: "https://github.com/aman44444/scoresource",
    projectLink: "https://scoresource.vercel.app",
  },
  {
    title: "Todoist",
    description:
      "A versatile to-do list app equipped with an alarm feature, designed to help you manage tasks efficiently and stay on schedule.",
    image: "/assets/images/todoist.png",
    githubLink: "https://github.com/aman44444/todolist",
    projectLink: "https://todooist.netlify.app",
  },
  {
    title: "Foodgram",
    description:
      "An intuitive food delivery web app offering a seamless user experience, designed to bring your favorite meals right to your doorstep.",
    image: "/assets/images/foodgram.png",
    githubLink: "https://github.com/aman44444/foodgram",
    projectLink: "https://foodgramm.netlify.app",
  },
];

const Project = ({ isProjectVisible, onClose }: ProjectModalProps) => {
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
          {PROJECTS.map((project) => (
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
