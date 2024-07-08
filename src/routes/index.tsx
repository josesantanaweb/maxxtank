import { AppsPage, HomePage, ProjectsPage, ContactPage, TanksPage } from '@/pages'

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
  {
    path: '/tanques',
    element: <TanksPage />,
  },
]
