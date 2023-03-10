import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { IRouters } from './type'

const Login = lazy(() => import('../pages/Login'))
const Recommend = lazy(() => import('../pages/Recommend'))
const PlayList = lazy(() => import('../pages/PlayList'))
const MV = lazy(() => import('../pages/MV'))

const routers: IRouters[] = [
  {
    path: '*',
    element: <Navigate to='recommend' />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/recommend',
    element: <Recommend />,
    auth: true
  },
  {
    path: '/mv',
    element: <MV />,
    auth: true
  },
  {
    path: '/playlist/:id',
    element: <PlayList />,
    auth: true
  }
]

export default routers
