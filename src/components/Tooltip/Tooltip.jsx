/* eslint-disable react/prop-types */
import cs from './Tooltip.module.css'

function Tooltip(props) {
  const { text, children } = props
  return (
    <div className={cs.tooltip}>
      {children}
      <span className={cs.text}>{text}</span>
    </div>
  )
}

export default Tooltip
