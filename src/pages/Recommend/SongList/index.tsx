import React from 'react'
import { useRequest } from 'ahooks'
import { getRecommendSongList } from '../../../apis/song'
import { Col, Row, Skeleton } from 'antd'
import { IRecommendSongList } from '../../../apis/types/song'
import { CaretRightOutlined, RightOutlined } from '@ant-design/icons'
import { playCountFormat } from '../../../utils/format'
import { useNavigate } from 'react-router-dom'
import styles from './style.module.scss'

interface IListRowProps {
  data: IRecommendSongList[] | undefined
}

const SongList: React.FC = () => {
  const { data, loading } = useRequest(getRecommendSongList)

  return (
    <div className={styles.content}>
      <Skeleton loading={loading} active>
        <div className={styles.title}>
          推荐歌单 <RightOutlined className={styles.icon} />
        </div>
        <ListRow data={data?.slice(0, 4)} />
        <ListRow data={data?.slice(4, 8)} />
      </Skeleton>
    </div>
  )
}

const ListRow: React.FC<IListRowProps> = ({ data }) => {
  const navigate = useNavigate()

  const handleClick = (id: number) => {
    navigate(`/playlist/${id}`)
  }

  return (
    <Row gutter={12}>
      {data?.map(({ id, picUrl, name, playCount }) => (
        <Col key={id} span={6}>
          <img className={styles.pic} key={id} src={picUrl} onClick={() => handleClick(id)} />
          <div className={styles.name}>{name}</div>
          <span className={styles.playCount}>
            <CaretRightOutlined />
            {playCountFormat(playCount)}
          </span>
        </Col>
      ))}
    </Row>
  )
}

export default SongList
