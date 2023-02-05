import React from 'react'
import { useRequest } from 'ahooks'
import { getMVList } from '../../../apis/mv'
import { Col, Row, Skeleton } from 'antd'
import { ItemMV } from '../../../components'

interface IAreaMVListProps {
  area: string
}

const AreaMVList: React.FC<IAreaMVListProps> = ({ area }) => {
  const { data, loading } = useRequest(() => getMVList(area), {
    refreshDeps: [area]
  })

  return (
    <Skeleton loading={loading} active>
      {data?.map(({ id }, index, list) => {
        return index % 4 === 0 ? (
          <Row key={id} gutter={48}>
            <Col span={6}>
              <ItemMV data={list[index]} />
            </Col>
            <Col span={6}>
              <ItemMV data={list[index + 1]} />
            </Col>
            <Col span={6}>
              <ItemMV data={list[index + 2]} />
            </Col>
            <Col span={6}>
              <ItemMV data={list[index + 3]} />
            </Col>
          </Row>
        ) : null
      })}
    </Skeleton>
  )
}

export default AreaMVList
