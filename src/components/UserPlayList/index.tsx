import React from 'react'
import { userPlaylist } from '../../apis/account'
import { useRequest } from 'ahooks'
import { UnorderedListOutlined } from '@ant-design/icons'
import { IPlaylist } from '../../apis/types/account'
import { Skeleton } from 'antd'
import styles from './style.module.scss'

interface IUserPlayListProp {
  uid: number
}

interface IDetailListProps {
  title: string
  data: IPlaylist[] | undefined
}

// 用户歌单
const UserPlayList: React.FC<IUserPlayListProp> = ({ uid }) => {
  const { data, loading } = useRequest(() => userPlaylist(uid), {
    refreshDeps: [uid]
  })

  return (
    <Skeleton loading={loading} className={styles.container}>
      <DetailList title='创建的歌单' data={data?.create} />
      <DetailList title='收藏的歌单' data={data?.collect} />
    </Skeleton>
  )
}

const DetailList: React.FC<IDetailListProps> = ({ title, data }) => {
  return (
    <>
      <div className={styles.mainTitle}>{title}</div>
      {data?.map((item) => (
        <div title={item.name} key={item.id} className={styles.listTitle}>
          <UnorderedListOutlined className={styles.listIcon} />
          {item.name}
        </div>
      ))}
    </>
  )
}

export default UserPlayList
