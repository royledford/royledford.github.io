import ProjectItem from '../../components/ProjectItem/ProjectItem'
import cs from './Projects.module.css'
import BackLink from '../../components/BackLink/BackLink'
import { projectList } from './projectList'

export default function Projects() {
  return (
    <div className={cs.wrap}>
      <BackLink />
      <p>Some previous projects I have worked on.</p>
      <ul className={cs.list}>
        {Object.keys(projectList).map((project) => {
          const { name, description, to } = projectList[project]
          return (
            <ProjectItem
              key={project}
              name={name}
              description={description}
              to={to}
            />
          )
        })}
      </ul>
    </div>
  )
}
