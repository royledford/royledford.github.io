import cs from './Link.module.css'
import cn from 'classnames'

// eslint-disable-next-line react/prop-types
export default function Link({ to, icon = null, children, className }) {
  return (
    <span className={cn(cs.wrap, className)}>
      <a className={cs.iconLink} href={to} target="_blank">
        {icon}
        {children}
      </a>
    </span>
  )
}
