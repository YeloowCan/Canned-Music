import { createSlice } from '@reduxjs/toolkit'
import { IPlaylist } from '../../apis/types/playlist'
import { ISongDetail } from '../../apis/types/song'

export interface PlayingAudioState {
  isPlaying: boolean
  playingSong: ISongDetail | null
  volume: number
  playlist: IPlaylist[]
}

const initialPlayingAudioState: PlayingAudioState = {
  isPlaying: false,
  playingSong: null,
  volume: 100,
  playlist: []
}

export const playingAudioSlice = createSlice({
  name: 'playingList',
  initialState: initialPlayingAudioState,
  reducers: {
    setPlayingSong: (state, { payload }) => ({
      ...state,
      isPlaying: true,
      playingSong: payload
    }),
    setPlayList: (state, { payload }) => ({
      ...state,
      playlist: payload
    }),
    changePlayingState: (state) => ({
      ...state,
      isPlaying: !state.isPlaying
    }),
    changeVolume: (state, { payload }) => ({
      ...state,
      volume: payload
    })
  }
})

export const { setPlayingSong, changePlayingState, changeVolume, setPlayList } = playingAudioSlice.actions

export default playingAudioSlice.reducer
