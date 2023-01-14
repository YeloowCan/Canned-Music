import React from 'react'
import { Avatar, Layout } from 'antd'
import { useAppSelector } from '../../hooks'
import styles from './style.module.scss'
import UserPlayList from '../UserPlayList'

const { Sider } = Layout

const LeftMenu: React.FC = () => {
  const { userInfo } = useAppSelector((store) => store.login)
  const { profile, userId } = userInfo
  const { avatarUrl, nickname } = profile
  console.log(userInfo, profile, userId)

  return (
    <Sider>
      <div>
        <Avatar src={avatarUrl} size='large' />
        <span className={styles.nickName}>{nickname}</span>
      </div>
      <UserPlayList uid={userId} />
    </Sider>
  )
}

export default LeftMenu
