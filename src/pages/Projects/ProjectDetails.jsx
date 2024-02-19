import React from 'react'
import { useParams } from 'react-router-dom'
import { projectList } from './projectList'
import Synth from './projectDocs/Synth'
import GPEats from './projectDocs/GPEats'
import FashionLogin from './projectDocs/FashionLogin'
import MyTime from './projectDocs/MyTime'
import PZA from './projectDocs/PZA'

const Components = {
  Synth,
  GPEats,
  FashionLogin,
  MyTime,
  PZA,
}

// TODO: this would be better if it could import the .md file and render it.
// But I couldn't get vite to figure our the paths properly for the dynamic import. :(
// The general idea was to write the .md, add to projectList.js and that's it.
export default function ProjectDetails() {
  const { project } = useParams()

  const comp = projectList[project].component

  if (!comp) {
    throw new Error(
      `Project not found: ${project}. Did you add it to projectList.js, create the .md, add the component, and add the import/update Components in ProjectDetails.jsx?`,
    )
  }

  return React.createElement(Components[comp])
}
