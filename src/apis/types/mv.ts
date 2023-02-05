import { IArtists } from './song'

export interface IMVList {
  id: number
  cover: string
  name: string
  artists: IArtists[]
}
