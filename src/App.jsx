import cs from './App.module.css'
import cn from 'classnames'
import { Menu, Linkedin, Github } from 'feather-icons-react'
import Link from './components/Link/Link'

function App() {
  return (
    <div className={cn(cs.wrapper)}>
      <div className={cs.header}>
        <Menu className={cs.menu} />
        <div className={cs.headerLinks}>
          <Link
            to="https://www.linkedin.com/in/royledford/"
            className={cs.navLink}>
            Blog
          </Link>
          <Link to="https://github.com/royledford" className={cs.navLink}>
            Projects
          </Link>

          <Link
            icon={<Linkedin />}
            to="https://www.linkedin.com/in/royledford/"
            className={cs.navLink}></Link>
          <Link
            icon={<Github />}
            to="https://github.com/royledford"
            className={cs.navLink}></Link>
        </div>
      </div>

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
        </ul>

        <div className="links">
          <a href="mailto:roy@royledford.com">
            <span style={{ marginRight: '40px' }}>roy@royledford.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/royledford/"
            className="linkedin">
            <span>linkedin.com/in/royledford/</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
