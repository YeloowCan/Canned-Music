import React, { Dispatch, SetStateAction } from 'react'
import { userPlaylist } from '../../../apis/playlist'
import { useRequest } from 'ahooks'
import { UnorderedListOutlined } from '@ant-design/icons'
import { IPlayListDetail } from '../../../apis/types/playlist'
import { Skeleton } from 'antd'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import styles from './style.module.scss'

interface IUserPlayListProp {
  uid: number
  selectedMenu: string
  setSelectedMenu: Dispatch<SetStateAction<string>>
}

interface IDetailListProps {
  title: string
  data: IPlayListDetail[] | undefined
  selectedMenu: string
  setSelectedMenu: Dispatch<SetStateAction<string>>
}

const prefixCls = 'userPlayList'

// 用户歌单
const UserPlayList: React.FC<IUserPlayListProp> = ({ uid, selectedMenu, setSelectedMenu }) => {
  const { data, loading } = useRequest(() => userPlaylist(uid), {
    refreshDeps: [uid]
  })

  return (
    <Skeleton loading={loading} active className={styles[prefixCls]}>
      <DetailList
        title='创建的歌单'
        data={data?.create}
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
      />
      <DetailList
        title='收藏的歌单'
        data={data?.collect}
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
      />
    </Skeleton>
  )
}

const DetailList: React.FC<IDetailListProps> = ({ title, data, selectedMenu, setSelectedMenu }) => {
  const navigate = useNavigate()
  const jumpDetail = (id: number) => {
    setSelectedMenu(id + '')
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
          className={classNames(styles[`${prefixCls}-listTitle`], {
            [styles['userPlayList-selected']]: selectedMenu === item.id + ''
          })}
        >
          <UnorderedListOutlined className={styles[`${prefixCls}-listIcon`]} />
          {item.name}
        </div>
      ))}
    </>
  )
}

export default UserPlayList
