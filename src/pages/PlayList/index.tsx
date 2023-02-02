import React from 'react'
import { useRequest } from 'ahooks'
import { Col, Row, Skeleton, Table, Tabs, Tag } from 'antd'
import { useParams } from 'react-router-dom'
import { getPlayListDetail } from '../../apis/playlist'
import { IAlbum } from '../../apis/types/playlist'
import { IArtists } from '../../apis/types/song'
import styles from './style.module.scss'
import { durationFormat } from '../../utils/format'

const columns = [
  {
    title: '音乐标题',
    dataIndex: 'name',
    width: '35%'
  },
  {
    title: '歌手',
    dataIndex: 'ar',
    width: '25%',
    render: (text: IArtists[]) => text.map((item) => item.name).join(' / ')
  },
  {
    title: '专题',
    dataIndex: 'al',
    width: '25%',
    render: (text: IAlbum) => text.name
  },
  {
    title: '时长',
    dataIndex: 'dt',
    width: '15%',
    render: (text: number) => durationFormat(text)
  }
]

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
            children: <Table pagination={false} columns={columns} dataSource={list} rowKey='id' />
          },
          {
            key: 'comment',
            label: '评论',
            children: `Content of Tab Pane 2`
          }
        ]}
      />
    </Skeleton>
  )
}

export default PlayList
