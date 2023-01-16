import request from '../utils/request'
import { IBanner, IRecommendSongList } from './types/recommend'

/**
 * @description 获取Banner
 * @param type 类型 
    0: pc

    1: android

    2: iphone

    3: ipad
 */
const getBanner = async (type = 0): Promise<IBanner[]> => {
  const response = await request({
    url: `banner?type=${type}`
  })

  return response.banners
}

/**
 * @description 推荐歌单
 */
const getRecommendSongList = async (): Promise<IRecommendSongList[]> => {
  const response = await request({
    url: `/personalized`
  })

  return response.result
}

export { getBanner, getRecommendSongList }
