import { createSlice } from '@reduxjs/toolkit'
import { ISongDetail } from '../../apis/types/song'

export interface PlayingAudioState {
  isPlaying: boolean
  playingSong: ISongDetail | null
}

const initialPlayingAudioState: PlayingAudioState = {
  isPlaying: false,
  playingSong: null
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
    })
  }
})

export const { setPlayingSong, changePlayingState } = playingAudioSlice.actions

export default playingAudioSlice.reducer
