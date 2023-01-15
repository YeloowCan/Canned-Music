import React from 'react'
import { Layout } from 'antd'
import { useLocation } from 'react-router-dom'
import TopMenu from './TopMenu'
import LeftMenu from './LeftMenu'
import styles from './style.module.scss'

const { Content, Footer } = Layout

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
        <Content className={styles.content}>{children}</Content>
      </Layout>
      <Footer></Footer>
    </Layout>
  )
}

export default MainLayout
