/* eslint-disable react/prop-types */
import cs from './NavLink.module.css'
import cn from 'classnames'
import Tooltip from '../Tooltip/Tooltip'
import { Link } from 'react-router-dom'

export default function NavLink({
  to,
  icon = null,
  tooltip = '',
  newTab = false,
  children,
  className,
}) {
  return (
    <Tooltip text={tooltip}>
      <Link
        className={cn(cs.iconLink, className)}
        to={to}
        target={newTab ? '_blank' : '_self'}>
        {icon}
        {children}
      </Link>
    </Tooltip>
  )
}
