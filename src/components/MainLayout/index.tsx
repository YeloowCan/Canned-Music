import React from 'react'
import { Layout } from 'antd'
import { useLocation } from 'react-router-dom'
import TopMenu from './TopMenu'
import styles from './style.module.scss'

interface IMainLayoutProps {
  children: React.ReactElement
}

const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  const location = useLocation()

  const { pathname } = location

  return ['/', '/login'].includes(pathname) ? (
    children
  ) : (
    <Layout className={styles.layout}>
      <TopMenu />
      {children}
    </Layout>
  )
}

export default MainLayout
