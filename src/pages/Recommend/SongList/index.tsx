import React from 'react'
import { useRequest } from 'ahooks'
import { getRecommendSongList } from '../../../apis/recommend'
import { Col, Row } from 'antd'
import { IRecommendSongList } from '../../../apis/types/recommend'
import { RightOutlined } from '@ant-design/icons'
import styles from './style.module.scss'

interface IListRowProps {
  data: IRecommendSongList[] | undefined
}

const SongList: React.FC = () => {
  const { data } = useRequest(getRecommendSongList)

  return (
    <div className={styles.content}>
      <div className={styles.title}>
        推荐歌单 <RightOutlined className={styles.icon} />
      </div>
      <ListRow data={data?.slice(0, 4)} />
      <ListRow data={data?.slice(4, 8)} />
    </div>
  )
}

const ListRow: React.FC<IListRowProps> = ({ data }) => {
  return (
    <Row gutter={12}>
      {data?.map(({ id, picUrl, name }) => (
        <Col key={id} span={6}>
          <img className={styles.pic} key={id} src={picUrl} />
          <div className={styles.name}>{name}</div>
        </Col>
      ))}
    </Row>
  )
}

export default SongList
