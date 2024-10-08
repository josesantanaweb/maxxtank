import HomePage from '@/pages/home'
import React from 'react'

export { HomePage }

export const AppsPage = React.lazy(() => import('@/pages/apps'))
export const ProjectsPage = React.lazy(() => import('@/pages/proyects'))
export const ContactPage = React.lazy(() => import('@/pages/contact'))
export const TanksPage = React.lazy(() => import('@/pages/tanks'))
export const ProjectDetailsPage = React.lazy(() => import('@/pages/projectDetails'))

