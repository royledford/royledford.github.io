import cs from './Home.module.css'
import cn from 'classnames'
import Link from '../../components/Link/Link'

function Home() {
  return (
    <div className={cn(cs.wrapper)}>
      <div className={cs.content}>
        <h1>Roy Ledford</h1>
        <p>Hi, I&apos;m a frontend software developer.</p>

        <ul>
          <li>
            I led the team at{' '}
            <Link to="https://qcareplus.com/">Q Care Plus</Link> on defining and
            building out the the telehealth and EMR application frontend for
            providers and patients.
          </li>
          <li>
            I was the lead frontend engineer on
            <Link to="https://www.amnhealthcare.com/technology/virtual-care/telehealth-platform/">
              AMN Health Care&apos;s Telehealth SAAS Platform
            </Link>
            . Developed all aspects of the web applications from startup to
            deployment, created an in-depth design system, implemented real-time
            video and chat messaging.
          </li>
          <li>
            Prior to that I was a staff engineer and manager of an engineering
            team building internal tooling for 3D modeling, 2D drawing
            extraction, and material management at
            <Link to="https://www.woodplc.com/">Wood Group</Link>.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
