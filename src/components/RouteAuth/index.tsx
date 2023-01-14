import { message } from 'antd'
import React, { useEffect } from 'react'
import { Location, useLocation, useNavigate, useRoutes } from 'react-router-dom'
import { useAppSelector } from '../../hooks'
import { IRouters } from '../../router/type'

interface IRouterAuthProps {
  routers: IRouters[]
}

const RouterAuth: React.FC<IRouterAuthProps> = ({ routers }) => {
  const location = useLocation()
  const naviagte = useNavigate()

  const { isLogined } = useAppSelector((store) => store.login)

  const findRouter = (routers: IRouters[], path: string): IRouters | null => {
    for (const val of routers) {
      if (val.path === path) {
        return val
      }
      if (val.children) {
        return findRouter(val.children, path)
      }
    }
    return null
  }

  const jumpRouter = (location: Location) => {
    const { pathname } = location
    const findRoute = findRouter(routers, pathname)
    if (findRoute?.auth && !isLogined) {
      message.error('请登录')
      naviagte('/login')
    }
  }

  useEffect(() => {
    jumpRouter(location)
  }, [location])

  const component = useRoutes(routers)
  return component
}

export default RouterAuth
