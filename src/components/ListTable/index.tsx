import React from 'react'
import { Table } from 'antd'
import { IArtists } from '../../apis/types/song'
import { IAlbum, IPlaylist } from '../../apis/types/playlist'
import { durationFormat } from '../../utils/format'
import { useDispatch } from 'react-redux'
import { setPlayingSong, setPlayList } from '../../redux/slices/playingAudioSlice'

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

interface IListTableProps {
  list: IPlaylist[] | undefined
}

const ListTable: React.FC<IListTableProps> = ({ list }) => {
  const dispatch = useDispatch()
  const handleDoubleClick = (record: IPlaylist) => {
    dispatch(
      setPlayingSong({
        ...record,
        picUrl: record.al.picUrl,
        song: {
          artists: record.ar
        }
      })
    )
    dispatch(setPlayList(list))
  }

  return (
    <Table
      pagination={false}
      columns={columns}
      dataSource={list || []}
      rowKey='id'
      onRow={(record) => {
        return {
          onDoubleClick: () => handleDoubleClick(record)
        }
      }}
    />
  )
}

export default ListTable
