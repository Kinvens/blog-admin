import { lazy } from 'react'

import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: 'login',
    Component: lazy(async () => await import('@/views/home/index.tsx')),
    children: [],
  },
  //   {
  //     path: '/',
  //     Component: lazy(() => import('@/views/login/index.tsx')),
  //   },
])

export default router
