import { useRequest } from 'ahooks'
import { Skeleton, Table } from 'antd'
import React from 'react'
import { useParams } from 'react-router-dom'
import { getPlayListDetail } from '../../apis/playlist'

const columns = [
  {
    title: '名称',
    dataIndex: 'name'
  }
]

const PlayList: React.FC = () => {
  const { id = '' } = useParams()

  const { data, loading } = useRequest(() => getPlayListDetail(id), {
    refreshDeps: [id]
  })

  return (
    <Skeleton loading={loading}>
      <Table columns={columns} dataSource={data} />
    </Skeleton>
  )
}

export default PlayList
