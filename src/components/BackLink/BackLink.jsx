import cs from './BackLink.module.css'
import cn from 'classnames'
import { CornerUpLeft } from 'feather-icons-react'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export default function BackLink({ to = '/', className }) {
  return (
    <Link className={cn(cs.link, className)} to={to}>
      <CornerUpLeft />
    </Link>
  )
}
