import React from 'react'
//  keep in mind 2 things an image and a name of the project
function ProjectItems({image, name}) {
  return (
    <div className='projectItem' >
        <div style={{backgroundImage:`url($(image))`}} className="bgImage" />
        <h1>{name}</h1>

      
    </div>
  )
}

export default ProjectItems;
