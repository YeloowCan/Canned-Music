import React, { useState } from 'react'
import { Layout } from 'antd'
import { useAppSelector } from '../../../hooks'
import UserPlayList from './UserPlayList'
import { LeftMenuList } from '../../../constants/menu'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import styles from './style.module.scss'

const { Sider } = Layout

const LeftMenu: React.FC = () => {
  const navigate = useNavigate()
  const { userInfo } = useAppSelector((store) => store.login)
  const { userId } = userInfo

  const [selectedMenu, setSelectedMenu] = useState('recommend')

  const navigatePath = (path: string) => {
    setSelectedMenu(path)
    navigate(`/${path}`)
  }

  const renderMenu = () => {
    return LeftMenuList.map((item) => (
      <div
        onClick={() => navigatePath(item.path)}
        className={classNames(styles.menuTitle, { [styles.menuSelected]: selectedMenu === item.path })}
        key={item.key}
      >
        {item.key}
      </div>
    ))
  }

  return (
    <Sider className={styles.sider}>
      {renderMenu()}
      <UserPlayList uid={userId} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
    </Sider>
  )
}

export default LeftMenu
