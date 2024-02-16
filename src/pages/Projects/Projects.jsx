import ProjectItem from '../../components/ProjectItem/ProjectItem'
import cs from './Projects.module.css'
import BackLink from '../../components/BackLink/BackLink'
import { projectList } from './projectList'

export default function Synth() {
  return (
    <div className={cs.wrap}>
      <BackLink />
      <p>Some side projects I am working on.</p>
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
        {/* <ProjectItem
          name="Synth"
          description="A synthesizer using Web Audio API and neumorphism design"
          to="/projects/synth"
        />
        <ProjectItem
          name="GP Eats"
          description="Web app to display nearby restaurants using Google Places API and React"
          to="/projects/gp-eats"
        /> */}
      </ul>
    </div>
  )
}
