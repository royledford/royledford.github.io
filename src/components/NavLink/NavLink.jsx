/* eslint-disable react/prop-types */
import cs from './NavLink.module.css'
import cn from 'classnames'
import Tooltip from '../Tooltip/Tooltip'

export default function NavLink({
  to,
  icon = null,
  tooltip = '',
  children,
  className,
}) {
  return (
    <Tooltip text={tooltip}>
      <a className={cn(cs.iconLink, className)} href={to} target="_blank">
        {icon}
        {children}
      </a>
    </Tooltip>
  )
}
