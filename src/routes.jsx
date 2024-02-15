import ErrorPage from './ErrorPage.jsx'
import Layout from './Layout.jsx'
import Projects from './pages/Projects/Projects.jsx'
import Synth from './pages/Projects/projectPages/Synth/Synth.jsx'
export const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'projects',
        element: <Projects />,
      },
      { path: 'projects/synth', element: <Synth /> },
    ],
  },
]
