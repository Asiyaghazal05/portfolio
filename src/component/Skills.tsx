import React from 'react'

const Skills = () => {
  return (
    <div className="container pt-32">
      <div className="grid md:grid-cols-2 gap-20 items-center">
      <div>
        <h2 className="text-4x1 md:text-5x1"> Technologies I work with</h2>
        <p className="text-grey-500 pt-2">
          I Have A solid Foundation In Web Development, Specializing In HTML, CSS, And Javascript. My experience extends to using frameworks like react and next.js to create dynamic and user-friendly applications. i'm also proficient in tailwind CSS for efficient styling and design with a passion for learning . I stay updated on the latest technology to enhance my skills set and contribute effectively to projects
        </p>
      </div>
      <div>
        <div className="grid grid-cols-2 text-accent text-3x1 sm:text-4x1">
          <div className="space-y-2">
         <h2 data-aos="zoom-in-up" >Tailwind</h2>
         <h2 data-aos="zoom-in-up">CSS</h2>
         <h2 data-aos="zoom-in-up">Node.js</h2>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Skills
