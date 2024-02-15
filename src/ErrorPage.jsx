import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div
      id="error-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
      }}>
      <h1>Oops!</h1>
      <p>I can&quot;t find that page</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
