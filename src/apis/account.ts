import request from '../utils/request'
import { IPlaylist } from './types/account'

const accountInfo = () => {
  return request({
    url: 'user/playlist?uid=77456545&limit=100'
  })
}

/**
 * 获取用户歌单
 * @param uid 用户id
 */
const userPlaylist = async (uid: number): Promise<{ create: IPlaylist[]; collect: IPlaylist[] }> => {
  const response = await request({
    url: `user/playlist?uid=${uid}`
  })

  const playlist: IPlaylist[] = response.playlist || []
  const create = playlist.filter((item) => item.userId === uid)
  const collect = playlist.filter((item) => item.userId !== uid)

  return {
    create,
    collect
  }
}

export { accountInfo, userPlaylist }
