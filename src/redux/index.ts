import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './slices/loginSlice'

const store = configureStore({
  // 合并slice
  reducer: {
    login: loginSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
