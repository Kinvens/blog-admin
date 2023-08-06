import { lazy } from 'react'
import ForgotPassword from '../views/forgotPassword/index.tsx'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    Component: lazy(async () => await import('../views/home/index.tsx')),
  },
  {
    path: '/login',
    Component: lazy(async () => await import('../views/login/index.tsx')),
    children: [],
  },
  {
    path: '/forgot',
    Component: ForgotPassword,
    children: [],
  },
])

export default router
