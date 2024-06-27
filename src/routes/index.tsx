import { AppsPage, HomePage, ProjectsPage, ContactPage } from '@/pages'

export const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/aplicaciones',
    element: <AppsPage />,
  },
  {
    path: '/proyectos',
    element: <ProjectsPage />,
  },
  {
    path: '/contacto',
    element: <ContactPage />,
  },
]
