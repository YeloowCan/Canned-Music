import request from '../utils/request'
import { IBanner, IRecommendNewSong, IRecommendSongList } from './types/recommend'

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
    url: `/personalized?limit=8`
  })

  return response.result
}

/**
 * @description 推荐新音乐
 */
const getRecommendNewSong = async (): Promise<IRecommendNewSong[]> => {
  const response = await request({
    url: `/personalized/newsong?limit=12`
  })

  return response.result
}

export { getBanner, getRecommendSongList, getRecommendNewSong }
