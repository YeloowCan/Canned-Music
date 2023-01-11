import { createSlice } from '@reduxjs/toolkit'
import { ILoginResult } from '../../apis/types/login'
import { SESSION_LOCAL_KEY } from '../../constants/keys'

export interface LoginState {
  isLogined: boolean
  userInfo: ILoginResult
}

const session = JSON.parse(localStorage.getItem(SESSION_LOCAL_KEY) || '{}')

const initialLoginState: LoginState = {
  isLogined: !!session.loginType,
  userInfo: session
}

export const loginSlice = createSlice({
  name: 'login',
  initialState: initialLoginState,
  reducers: {
    loginIn: (state, { payload }) => ({
      ...state,
      isLogined: true,
      userInfo: payload
    }),
    loginOut: (state) => ({
      ...state,
      isLogined: false
    })
  }
})

export const { loginIn, loginOut } = loginSlice.actions

export default loginSlice.reducer
