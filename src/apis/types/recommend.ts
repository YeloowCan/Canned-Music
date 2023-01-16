export interface IBanner {
  exclusive: boolean
  imageUrl: string
  targetId: number
  targetType: number
  titleColor: string
  typeTitle: string
  url: string
}

export interface IRecommendSongList {
  name: string
  picUrl: string
  id: number
  playCount: number
}
