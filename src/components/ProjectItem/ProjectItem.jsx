/* eslint-disable react/prop-types */
import cs from './ProjectItem.module.css'
import { Link } from 'react-router-dom'

export default function ProjectItem({ name, description, to }) {
  console.log('to', to) // TODO: remove this

  return (
    <li className={cs.listItem}>
      <Link to={to}>
        <h6>{name}</h6>
        <p>{description}</p>
      </Link>
    </li>
  )
}
