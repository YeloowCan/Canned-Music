import React from 'react'
import { useRequest } from 'ahooks'
import { Col, Row, Skeleton, Tabs, Tag } from 'antd'
import { useParams } from 'react-router-dom'
import { getPlayListDetail } from '../../apis/playlist'
import { ListTable } from '../../components'
import styles from './style.module.scss'

const PlayList: React.FC = () => {
  const { id = '' } = useParams()

  const { data, loading } = useRequest(() => getPlayListDetail(id), {
    refreshDeps: [id]
  })

  const { name, coverImgUrl, list } = data || {}

  return (
    <Skeleton loading={loading} active={true}>
      <Row gutter={12} className={styles.detailRow}>
        <Col span={3}>
          <img src={coverImgUrl} className={styles.coverImg} decoding='async' loading='lazy' />
        </Col>
        <Col span={21}>
          <div className={styles.playListName}>
            <Tag color='red'>歌单</Tag>
            {name}
          </div>
        </Col>
      </Row>
      <Tabs
        defaultActiveKey='list'
        items={[
          {
            key: 'list',
            label: '歌曲列表',
            children: <ListTable list={list} />
          }
        ]}
      />
    </Skeleton>
  )
}

export default PlayList
