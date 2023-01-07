import { FC, lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { SESSION_LOCAL_KEY } from './constants/keys'
import 'antd/dist/reset.css'
import './styles/global.scss'

const Login = lazy(() => import('./pages/Login'))
const Song = lazy(() => import('./pages/Song'))

const App: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/song' element={<Song />}></Route>
          <Route path='*' element={<Navigate to='login' />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
