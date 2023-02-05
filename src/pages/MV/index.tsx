import React from 'react'
import { Tabs } from 'antd'
import { MVAreaList } from '../../constants/menu'
import AreaMVList from './AreaMVList'

const MV: React.FC = () => {
  return (
    <Tabs
      defaultActiveKey='内地'
      items={MVAreaList.map((item) => ({
        key: item,
        label: item,
        children: <AreaMVList area={item} />
      }))}
    />
  )
}

export default MV
