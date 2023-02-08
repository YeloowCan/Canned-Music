import request from '../utils/request'
import { IPlayListDetail } from './types/playlist'

/**
 * 获取用户歌单
 * @param uid 用户id
 */
const userPlaylist = async (uid: number): Promise<{ create: IPlayListDetail[]; collect: IPlayListDetail[] }> => {
  const response = await request({
    url: `user/playlist?uid=${uid}`
  })

  const playlist: IPlayListDetail[] = response.playlist || []
  const create = playlist.filter((item) => item.userId === uid)
  const collect = playlist.filter((item) => item.userId !== uid)

  return {
    create,
    collect
  }
}

/**
 * 获取歌单详情
 * @param id
 * @returns
 */
const getPlayListDetail = async (id: string): Promise<IPlayListDetail> => {
  const response = await request({
    url: `/playlist/detail?id=${id}`
  })

  return { ...response.playlist, list: response.playlist.tracks }
}

export { userPlaylist, getPlayListDetail }
