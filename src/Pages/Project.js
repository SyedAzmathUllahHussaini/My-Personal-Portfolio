import React from 'react'
import ProjectItems from '../Components/ProjectItems'
// import img
// import proj1 from "../assets/proj1.jpg"
// import proj3 from "../assets/proj3.webp"
import { projectList } from '../helpers/ProjectList'

import "../Styles/Project.css"

 function Project() {
  return (
    <div className='project'>
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {/* <ProjectItems name='social Media Website' image={proj1} />
        <ProjectItems name="Spotify Clone" image={proj3} /> */}
        {projectList.map((project) => {
          return <ProjectItems name={project.name} image={project.image}/>
        })}

      </div>
 
    </div>
  )
}


export default Project;