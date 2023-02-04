import React from 'react'
import { Avatar, Layout } from 'antd'
import Logo from '../../../assets/logo.jpg'
import { useAppSelector } from '../../../hooks'
import styles from './style.module.scss'

const { Header } = Layout

const TopMenu: React.FC = () => {
  const { userInfo } = useAppSelector((store) => store.login)
  const { profile } = userInfo
  const { avatarUrl, nickname } = profile

  return (
    <Header>
      <img src={Logo} className={styles.logo} />
      <span className={styles.logoName}>罐头音乐</span>
      <span className={styles.user}>
        <Avatar src={avatarUrl} size='default' />
        <span className={styles.nickName}>{nickname}</span>
      </span>
    </Header>
  )
}

export default TopMenu
