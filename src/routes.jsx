import ErrorPage from './ErrorPage.jsx'
import Synth from './pages/Synth/Synth.jsx'
import Layout from './Layout.jsx'

export const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ path: 'synth', element: <Synth /> }],
  },
]
