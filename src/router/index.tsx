import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { IRouters } from './type'

const Login = lazy(() => import('../pages/Login'))
const Song = lazy(() => import('../pages/Song'))

const routers: IRouters[] = [
  {
    path: '*',
    element: <Navigate to='login' />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/song',
    element: <Song />,
    auth: true
  }
]

export default routers
