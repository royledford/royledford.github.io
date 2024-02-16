import { useEffect, useState } from 'react'
import Article from '../../components/Article/Article'
import { useParams } from 'react-router-dom'
import { projectList } from './projectList'

export default function Synth() {
  const [projectMd, setProjectMd] = useState(null)
  const { project } = useParams()
  const projectData = projectList[project]

  useEffect(() => {
    if (!project) {
      throw new Error(`Project not found: ${project}`)
    }

    async function loadProject() {
      const filename = `./projectDocs/${projectData.mdFile}?raw`
      // const response = await fetch(filename)
      // const text = await response.text()

      import(filename).then((content) => {
        setProjectMd(content.default)
      })
      // setProjectMd(text)
    }

    loadProject()
  }, [project, projectData.mdFile])

  return <Article markdownContent={projectMd} />
}
