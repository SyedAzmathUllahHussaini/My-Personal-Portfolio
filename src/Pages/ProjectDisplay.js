import React from 'react'
import {useParams} from "react-router-dom"
import { projectList } from '../helpers/ProjectList';

function ProjectDisplay() {
    const {id} = useParams();
    const project = projectList[id]
  return (
    <div>{id}</div>
  )
}

export default ProjectDisplay
