import React from 'react'
import { Avatar, Layout } from 'antd'
import { useAppSelector } from '../../../hooks'
import UserPlayList from './UserPlayList'
import styles from './style.module.scss'

const { Sider } = Layout

const LeftMenu: React.FC = () => {
  const { userInfo } = useAppSelector((store) => store.login)
  const { profile, userId } = userInfo
  const { avatarUrl, nickname } = profile

  return (
    <Sider className={styles.sider}>
      <div>
        <Avatar src={avatarUrl} size='large' />
        <span className={styles.nickName}>{nickname}</span>
      </div>
      <UserPlayList uid={userId} />
    </Sider>
  )
}

export default LeftMenu