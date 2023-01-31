import { createSlice } from '@reduxjs/toolkit'
import { ISongDetail } from '../../apis/types/song'

export interface PlayingAudioState {
  isPlaying: boolean
  playingSong: ISongDetail | null
  volume: number
}

const initialPlayingAudioState: PlayingAudioState = {
  isPlaying: false,
  playingSong: null,
  volume: 100
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

export const { setPlayingSong, changePlayingState, changeVolume } = playingAudioSlice.actions

export default playingAudioSlice.reducer
