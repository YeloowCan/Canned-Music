import React from 'react'
import { Layout } from 'antd'
import { useLocation } from 'react-router-dom'
import TopMenu from './TopMenu'
import LeftMenu from './LeftMenu'
import styles from './style.module.scss'

const { Content } = Layout

const IgnorePath = ['/', '/login']

interface IMainLayoutProps {
  children: React.ReactElement
}

const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  const location = useLocation()

  const { pathname } = location

  return IgnorePath.includes(pathname) ? (
    children
  ) : (
    <Layout className={styles.layout}>
      <TopMenu />
      <Layout>
        <LeftMenu />
        <Content>{children}</Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout
