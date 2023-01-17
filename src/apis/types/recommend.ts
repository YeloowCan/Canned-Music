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

interface IArtists {
  name: string
}

interface ISong {
  name: string
  alias: string[]
  artists: IArtists[]
}

export interface IRecommendNewSong {
  name: string
  picUrl: string
  id: number
  song: ISong
}
