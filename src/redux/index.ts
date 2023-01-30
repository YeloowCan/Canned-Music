import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './slices/loginSlice'
import playingAudioSlice from './slices/playingAudioSlice'

const store = configureStore({
  // 合并slice
  reducer: {
    login: loginSlice,
    playingAudio: playingAudioSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
