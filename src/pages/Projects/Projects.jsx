import ProjectItem from '../../components/ProjectItem/ProjectItem'
import cs from './Projects.module.css'
import BackLink from '../../components/BackLink/BackLink'

export default function Synth() {
  return (
    <div className={cs.wrap}>
      <BackLink />
      <p>Some side projects I am working on.</p>
      <ul className={cs.list}>
        <ProjectItem
          name="Synth"
          description="A synthesizer using Web Audio API and neumorphism design"
          to="/projects/synth"
        />
      </ul>
    </div>
  )
}