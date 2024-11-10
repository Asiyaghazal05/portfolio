
import { title } from 'process';
import React from 'react'
import Heading from './Heading';
import Card from './Card';


const data = [
  {
    id: 0,
    title: "Todolist",
    desc: " A react & typescript based app for managing and organizing your tasks efficiently",
    img: "project-2",
    tags: ["React", "node", "css", "typescript"],
},
  {
    id: 1,
    title: "Countdown Timer",
    desc: " A next.js and typescript powered website to tract with an interactive countdown feature",
    img: "project-3",
    tags: ["next.js", "node", "css", "typescript"],
  },


  
];


const Projects = () => {
  return (
    <div id='projects' className="container pt-32">
      <Heading title="My Projects" />
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map((el) => (< Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
