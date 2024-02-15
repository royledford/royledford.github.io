import cs from './BackLink.module.css'
import cn from 'classnames'
import { CornerUpLeft } from 'feather-icons-react'

// eslint-disable-next-line react/prop-types
export default function BackLink({ to = '/', className }) {
  return (
    <a className={cn(cs.link, className)} href={to}>
      <CornerUpLeft />
    </a>
  )
}
