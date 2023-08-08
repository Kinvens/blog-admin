import ForgotPassword from '../views/forgotPassword/index.tsx'
import Login from '../views/login/index.tsx'
import Home from '../views/home/index.tsx'

import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/login',
    Component: Login,
    children: [],
  },
  {
    path: '/forgot',
    Component: ForgotPassword,
    children: [],
  },
])

export default router
