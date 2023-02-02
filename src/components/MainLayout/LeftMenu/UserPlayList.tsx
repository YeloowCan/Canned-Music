import React from 'react'
import { userPlaylist } from '../../../apis/playlist'
import { useRequest } from 'ahooks'
import { UnorderedListOutlined } from '@ant-design/icons'
import { IPlayListDetail } from '../../../apis/types/playlist'
import { Skeleton } from 'antd'
import styles from './style.module.scss'
import { useNavigate } from 'react-router-dom'

interface IUserPlayListProp {
  uid: number
}

interface IDetailListProps {
  title: string
  data: IPlayListDetail[] | undefined
}

const prefixCls = 'userPlayList'

// 用户歌单
const UserPlayList: React.FC<IUserPlayListProp> = ({ uid }) => {
  const { data, loading } = useRequest(() => userPlaylist(uid), {
    refreshDeps: [uid]
  })

  return (
    <Skeleton loading={loading} className={styles[prefixCls]}>
      <DetailList title='创建的歌单' data={data?.create} />
      <DetailList title='收藏的歌单' data={data?.collect} />
    </Skeleton>
  )
}

const DetailList: React.FC<IDetailListProps> = ({ title, data }) => {
  const navigate = useNavigate()
  const jumpDetail = (id: number) => {
    navigate(`/playlist/${id}`)
  }
  return (
    <>
      <div className={styles[`${prefixCls}-mainTitle`]}>{title}</div>
      {data?.map((item) => (
        <div
          onClick={() => jumpDetail(item.id)}
          title={item.name}
          key={item.id}
          className={styles[`${prefixCls}-listTitle`]}
        >
          <UnorderedListOutlined className={styles[`${prefixCls}-listIcon`]} />
          {item.name}
        </div>
      ))}
    </>
  )
}

export default UserPlayList
