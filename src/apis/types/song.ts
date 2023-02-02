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

export interface IArtists {
  id: number
  name: string
}

interface ISong {
  name: string
  alias: string[]
  artists: IArtists[]
}

export interface ISongDetail {
  name: string
  picUrl: string
  id: number
  song: ISong
}
