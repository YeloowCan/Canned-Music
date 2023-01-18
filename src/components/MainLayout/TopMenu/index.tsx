import React from 'react'
import { Layout } from 'antd'
import Logo from '../../../assets/logo.jpg'
import styles from './style.module.scss'

const { Header } = Layout

const TopMenu: React.FC = () => {
  return (
    <Header>
      <img src={Logo} className={styles.logo} />
      <span className={styles.logoName}>罐头音乐</span>
    </Header>
  )
}

export default TopMenu
