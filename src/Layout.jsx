import { Linkedin, Github } from 'feather-icons-react'
import NavLink from './components/NavLink/NavLink'
import cs from './Layout.module.css'
import { Outlet, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home'

export default function Layout() {
  const location = useLocation()

  return (
    <div className={cs.wrapper}>
      <div className={cs.header}>
        {/* <Menu className={cs.menu} /> */}
        <div className={cs.headerLinks}>
          {/* <NavLink
            to="https://www.linkedin.com/in/royledford/"
            tooltip="Blog"
            className={cs.navLink}>
            Blog
          </NavLink> */}
          {/* <NavLink to="/projects" tooltip="Projects" className={cs.navLink}>
            Projects
          </NavLink> */}

          <NavLink
            newTab
            icon={<Linkedin />}
            to="https://www.linkedin.com/in/royledford/"
            tooltip="linkedin"
            className={cs.navLink}
          />
          <NavLink
            newTab
            icon={<Github />}
            to="https://github.com/royledford"
            tooltip="Github"
            className={cs.navLink}
          />
        </div>
      </div>
      <div className="content">
        {location.pathname === '/' ? <Home /> : <Outlet />}
      </div>
    </div>
  )
}
