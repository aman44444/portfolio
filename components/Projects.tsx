import React from "react";
import Card from "./Card";

const Project =({ isProjectVisible, onClose }) => {
  if (!isProjectVisible) return null;

  const projects = [
    {
      title: "WordleXkbc",
      description: "A unique Wordle clone infused with the excitement of 'Kaun Banega Crorepati,' combining word guessing with thrilling quiz elements",
      image: "/assets/images/wordle.png",
      githubLink: "https://github.com/aman44444/WordlexKbc",
      projectLink: "https://wordlexkbc.netlify.app",
    },
    {
      title: "LyricLink",
      description: "Matches users based on their music taste. Utilized Spotify API to fetch and analyze user music preferences.",
      image: "/assets/images/lyriclink.png",
      githubLink: "https://github.com/aman44444/LyricLink",
      projectLink: "https://lyriclink.vercel.app",
    },
    {
      title: "TodoList",
      description: "A versatile to-do list app equipped with an alarm feature, designed to help you manage tasks efficiently and stay on schedule.",
      image: "/assets/images/todoist.png",
      githubLink: "https://github.com/aman44444/todolist",
      projectLink: "https://todooist.netlify.app",
    },
    {
      title: "Foodgram",
      description: "An intuitive food delivery web app offering a seamless user experience, designed to bring your favorite meals right to your doorstep.",
      image: "/assets/images/foodgram.png",
      githubLink: "https://github.com/aman44444/foodgram",
      projectLink: "https://foodgramm.netlify.app",
    },
    {
      title: "Weather App",
      description: "A sleek weather web app that provides accurate, real-time forecasts to help you stay prepared for any weather conditions.",
      image: "/assets/images/weatherReport.png",
      githubLink: "https://github.com/aman44444/weatherupdate",
      projectLink: "https://weathereportt.netlify.app",
    },
  ];


  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id="wrapper">
      <div className="w-11/12 md:w-3/4 h-4/5 md:h-3/4 bg-white rounded-xl relative overflow-auto">
        <div className="bg-gray-200 w-full h-1/4 rounded-t-xl text-2xl md:text-3xl flex items-center justify-between px-4 md:px-6 py-4">
          <h2 className="font-semibold">Projects</h2>
          <button
            className="text-black font-bold text-sm bg-white rounded-full h-8 w-8 flex items-center justify-center"
            onClick={() => onClose()}
            aria-label="Close"
          >
            X
          </button>
        </div>
        <div className="h-3/4 flex flex-wrap w-full gap-6 justify-center items-center p-4 overflow-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative h-40 w-full md:w-1/4 bg-black rounded-xl flex items-end flex-wrap"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <Card title={project.title} description={project.description} githubLink={project.githubLink} projectLink={project.projectLink} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
