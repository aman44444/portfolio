import React from "react";
import Card from "./Card";
import Image from "next/image";

function Project({ isProjectVisible, onClose }) {
  if (!isProjectVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
    >
      <div className="w-3/4 h-3/4 bg-white rounded-xl relative">
        <div className="bg-gray-200 w-full h-1/4 rounded-t-xl text-3xl flex items-center px-6 py-4">
          <h2 className="text-3xl font-semibold">Projects</h2>
          <button
            className="ml-auto text-black text-sm font-bold bg-white rounded-full h-8 w-8 flex items-center justify-center"
            onClick={() => onClose()}
            aria-label="Close"
          >
            X
          </button>
        </div>
        <div
          className=" h-3/4 flex flex-wrap w-full gap-6 justify-center items-center p-4 overflow-auto">
          {[
            {
              title: "WordleXkbc",
              description: "A unique Wordle clone infused with the excitement of 'Kaun Banega Crorepati,' combining word guessing with thrilling quiz elements",
              image: "/assets/images/wordle.png",
            },
            {
              title: "TodoList",
              description: "A versatile to-do list app equipped with an alarm feature, designed to help you manage tasks efficiently and stay on schedule.",
              image: "/assets/images/todolist.png",
            },
            {
              title: "Foodgram",
              description: "An intuitive food delivery web app offering a seamless user experience, designed to bring your favorite meals right to your doorstep.",
              image: "/assets/images/foodgram.png",
            },
            {
              title: "Weather App",
              description: "A sleek weather web app that provides accurate, real-time forecasts to help you stay prepared for any weather conditions.",
              image: "/assets/images/weather.png",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="relative h-40 w-1/4 bg-black rounded-xl flex items-end flex-wrap"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
               
              }}
            >
              
               
              <Card title={project.title} description={project.description} />
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
