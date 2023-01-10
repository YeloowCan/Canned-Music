import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import routers from './router'
import { RouterAuth } from './components'
import 'antd/dist/reset.css'
import './styles/global.scss'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <RouterAuth routers={routers} />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
