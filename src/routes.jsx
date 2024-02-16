import ErrorPage from './ErrorPage.jsx'
import Layout from './Layout.jsx'
import Projects from './pages/Projects/Projects.jsx'
import ProjectDetails from './pages/Projects/ProjectDetails.jsx'
// import Synth from './pages/Projects/projectPages/Synth.jsx'
// import GPEats from './pages/Projects/projectPages/GPEats.jsx'

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
      { path: 'projects/:project', element: <ProjectDetails /> },
      // { path: 'projects/gp-eats', element: <GPEats /> },
    ],
  },
]
