import React from 'react'
import { Col, Row, Skeleton } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import { useRequest } from 'ahooks'
import { getRecommendNewSong } from '../../../apis/recommend'
import { IRecommendNewSong } from '../../../apis/types/recommend'
import { PlayIcon } from '../../../components'
import styles from './style.module.scss'

interface ItemMusicProps {
  data: IRecommendNewSong
}

const LatestMusic: React.FC = () => {
  const { data, loading } = useRequest(getRecommendNewSong)

  return (
    <div className={styles.content}>
      <Skeleton loading={loading}>
        <div className={styles.title}>
          最新音乐 <RightOutlined className={styles.icon} />
        </div>
        {data?.map((item, index, list) =>
          index % 3 === 0 ? (
            <Row key={index} gutter={12}>
              <Col span={8}>
                <ItemMusic data={list[index]} />
              </Col>
              <Col span={8}>
                <ItemMusic data={list[index + 1]} />
              </Col>
              <Col span={8}>
                <ItemMusic data={list[index + 2]} />
              </Col>
            </Row>
          ) : null
        )}
      </Skeleton>
    </div>
  )
}

const ItemMusic: React.FC<ItemMusicProps> = ({ data }) => {
  const { id, picUrl, song } = data
  const { name, alias, artists } = song

  const songName = `${name}${alias.length > 0 ? `（${alias[0]}）` : ''}`
  const songArtists = artists.map((a) => a.name).join('/')

  return (
    <Row gutter={12} align='middle'>
      <Col span={6}>
        <img key={id} src={picUrl} className={styles.pic} loading='lazy' decoding='async' />
        <PlayIcon className={styles.playIcon} />
      </Col>
      <Col span={18}>
        <Row>
          <div className={styles.name} title={songName}>
            {name}
            <span className={styles.alias}>{alias.length > 0 ? `（${alias[0]}）` : ''}</span>
          </div>
        </Row>
        <Row>
          <div className={styles.artists} title={songArtists}>
            {songArtists}
          </div>
        </Row>
      </Col>
    </Row>
  )
}

export default LatestMusic
