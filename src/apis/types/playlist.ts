import { IArtists } from './song'

export interface IAlbum {
  id: number
  name: string
  picUrl: string
}

export interface IPlaylist {
  id: number
  name: string
  al: IAlbum
  ar: IArtists[]
}

export interface IPlayListDetail {
  adType: number
  backgroundCoverId: number
  cloudTrackCount: number
  commentCount: number
  coverImgUrl: string
  picUrl?: string
  createTime: number
  copywriter?: string
  creator: {
    avatarUrl: string
    nickname: string
    userId: number
  }
  description: string
  highQuality: boolean
  id: number
  name: string
  newImported: boolean
  opRecommend: boolean
  ordered: boolean
  playCount: number
  privacy: number
  shareCount: number
  specialType: number
  status: number
  subscribed: boolean
  subscribedCount: number
  subscribers: []
  tags: string[]
  trackCount: number
  trackIds: []
  trackNumberUpdateTime: number
  trackUpdateTime: number
  updateTime: number
  userId: number
  list?: IPlaylist[]
}
