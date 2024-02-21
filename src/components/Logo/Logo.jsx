import styles from './Logo.module.css'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/" className={styles.logo}>
      <svg
        width="36"
        height="46"
        viewBox="0 0 36 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.4976 11.5072C2.4976 11.5072 31.1155 10.2669 33.8464 2.50811C36.5772 -5.25066 2 43.6609 2 43.6609C2 43.6609 7.99567 27.3108 3.9904 17.1505C-0.0148759 6.99021 27.3776 43.6738 27.3776 43.6738L28.8704 42.396"
          stroke="#DDDDDD"
          strokeWidth="3"
          strokeLinecap="round"
          className={styles.path}
        />
      </svg>
      <svg
        width="36"
        height="46"
        viewBox="0 0 36 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.pathBg}>
        <path
          d="M2.4976 11.5072C2.4976 11.5072 31.1155 10.2669 33.8464 2.50811C36.5772 -5.25066 2 43.6609 2 43.6609C2 43.6609 7.99567 27.3108 3.9904 17.1505C-0.0148759 6.99021 27.3776 43.6738 27.3776 43.6738L28.8704 42.396"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </Link>
  )
}

export { Logo }
